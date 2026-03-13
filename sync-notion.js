const { Client } = require('@notionhq/client');
const axios = require('axios');

// ==========================================
// CONFIGURATION - UPDATE THESE VALUES
// ==========================================
const NOTION_TOKEN = 'YOUR_NOTION_INTERNAL_INTEGRATION_TOKEN';
const DATABASE_ID = 'YOUR_NOTION_DATABASE_ID';
const STRAPI_URL = 'http://localhost:1337';
const STRAPI_API_TOKEN = ''; // Optional if Strapi is public

const notion = new Client({ auth: NOTION_TOKEN });

async function syncNotionToStrapi() {
    console.log('🚀 Starting Notion to Strapi Sync...');

    try {
        // 1. Fetch from Notion
        const response = await notion.databases.query({
            database_id: DATABASE_ID,
            filter: {
                property: 'status',
                select: {
                    equals: 'Ready to Sync'
                }
            }
        });

        console.log(`📡 Found ${response.results.length} items ready to sync.`);

        for (const page of response.results) {
            const props = page.properties;
            const name = props.name.title[0]?.plain_text;
            console.log(`\n📦 Processing: ${name}...`);

            // 2. Fetch Page Content (The Itinerary Table)
            // Note: This assumes you have a Table Block inside the Notion page
            const blocks = await notion.blocks.children.list({ block_id: page.id });

            // Logic to parse the Itinerary table and Overview text
            const itinerary = [];
            let overviewText = [];

            // This is a simplified parser - it looks for table rows for the itinerary
            // and paragraphs for the overview
            for (const block of blocks.results) {
                if (block.type === 'table_row') {
                    const cells = block.table_row.cells;
                    if (cells.length >= 4) {
                        itinerary.push({
                            dayNumber: parseInt(cells[0][0]?.plain_text) || 1,
                            title: cells[1][0]?.plain_text || '',
                            location: cells[2][0]?.plain_text || '',
                            description: cells[3][0]?.plain_text || ''
                        });
                    }
                } else if (block.type === 'paragraph') {
                    overviewText.push({
                        type: 'paragraph',
                        children: [{ type: 'text', text: block.paragraph.rich_text[0]?.plain_text || '' }]
                    });
                }
            }

            // 3. Prepare the Data Object for Strapi
            const strapiData = {
                data: {
                    name: name,
                    slug: props.slug.rich_text[0]?.plain_text,
                    region: props.region.select?.name,
                    tagline: props.tagline.rich_text[0]?.plain_text,
                    maxAltitude: props.maxAltitude.number,
                    bestSeason: props.bestSeason.rich_text[0]?.plain_text,
                    duration: props.duration.rich_text[0]?.plain_text,
                    difficulty: props.difficulty.select?.name,
                    dailyActivity: props.dailyActivity.rich_text[0]?.plain_text,
                    overviewText: overviewText,
                    itinerary: itinerary,
                    // Parse comma-separated strings into component arrays
                    includes: (props.includes_list.rich_text[0]?.plain_text || '').split(',').map(i => ({ item: i.trim() })),
                    excludes: (props.excludes_list.rich_text[0]?.plain_text || '').split(',').map(i => ({ item: i.trim() }))
                }
            };

            // 4. POST to Strapi
            try {
                // Check if it exists (by slug) to update or create
                const existing = await axios.get(`${STRAPI_URL}/api/trekkings?filters[slug][$eq]=${strapiData.data.slug}`);

                if (existing.data.data.length > 0) {
                    const docId = existing.data.data[0].documentId;
                    await axios.put(`${STRAPI_URL}/api/trekkings/${docId}`, strapiData);
                    console.log(`✅ Updated: ${name}`);
                } else {
                    await axios.post(`${STRAPI_URL}/api/trekkings`, strapiData);
                    console.log(`✨ Created: ${name}`);
                }
            } catch (err) {
                console.error(`❌ Strapi Error for ${name}:`, err.response?.data?.error || err.message);
            }
        }

        console.log('\n🏁 Sync Completed Successfully!');

    } catch (error) {
        console.error('💥 Critical Sync Error:', error.message);
    }
}

syncNotionToStrapi();
