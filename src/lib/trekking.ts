import trekkings from '../data/trekkings.json';

function transformTrek(raw: any) {
    return {
        id: raw.slug,
        name: raw.title,
        slug: raw.slug,
        tagline: raw.tagline,
        region: raw.region || "Himalayas",
        location: raw.location || "Nepal",
        heroImage: {
            url: raw.images?.mainImages?.[0] || ""
        },
        overviewImage: {
            url: raw.images?.overviewImages?.[0] || ""
        },
        overviewText: [
            {
                type: 'paragraph',
                children: [{ text: raw.overview }]
            }
        ],
        maxAltitude: raw.keyInformation?.maximumAltitude,
        duration: raw.keyInformation?.duration,
        difficulty: raw.keyInformation?.difficulty,
        bestSeason: raw.keyInformation?.bestSeason,
        dailyActivity: raw.keyInformation?.dailyWalkingHours,
        includes: raw.includes?.map((item: string) => ({ item })) || [],
        excludes: raw.excludes?.map((item: string) => ({ item })) || [],
        itinerary: raw.itinerary?.map((day: any) => ({
            dayNumber: day.day,
            title: day.title,
            location: day.location,
            description: day.description
        })) || []
    };
}

export async function getTrekBySlug(slug: string) {
    const rawTrek = trekkings.find(t => t.slug === slug);
    if (!rawTrek) return null;
    return transformTrek(rawTrek);
}

export async function getTrekkings() {
    return trekkings.map(transformTrek);
}

export function getMediaUrl(url: string | undefined) {
    if (!url) return null;
    // Since we are using Unsplash or absolute URLs in the JSON, we just return them.
    return url;
}
