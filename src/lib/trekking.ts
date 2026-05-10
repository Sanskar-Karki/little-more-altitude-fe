import trekkings from '../data/trekkings.json';

function transformTrek(raw: any, lang: string = 'en') {
    const translation = lang !== 'en' ? raw.translations?.[lang] : null;

    return {
        id: raw.slug,
        name: translation?.title || raw.title,
        slug: raw.slug,
        tagline: translation?.tagline || raw.tagline,
        region: raw.region || "Himalayas",
        location: translation?.location || raw.location || "Nepal",
        heroImage: {
            url: raw.images?.mainImages?.[0] || ""
        },
        overviewImage: {
            url: raw.images?.overviewImages?.[0] || ""
        },
        overviewText: [
            {
                type: 'paragraph',
                children: [{ text: translation?.overview || raw.overview }]
            }
        ],
        maxAltitude: raw.keyInformation?.maximumAltitude,
        duration: raw.keyInformation?.duration,
        difficulty: raw.keyInformation?.difficulty,
        bestSeason: raw.keyInformation?.bestSeason,
        dailyActivity: raw.keyInformation?.dailyWalkingHours,
        includes: (translation?.includes || raw.includes)?.map((item: string) => ({ item })) || [],
        excludes: (translation?.excludes || raw.excludes)?.map((item: string) => ({ item })) || [],
        itinerary: (translation?.itinerary || raw.itinerary)?.map((day: any, index: number) => {
            const rawDay = raw.itinerary[index];
            return {
                dayNumber: day.day || rawDay?.day,
                title: day.title || rawDay?.title,
                location: day.location || rawDay?.location,
                description: day.description || rawDay?.description
            };
        }) || []
    };
}

export async function getTrekBySlug(slug: string, lang: string = 'en') {
    const rawTrek = trekkings.find(t => t.slug === slug);
    if (!rawTrek) return null;
    return transformTrek(rawTrek, lang);
}

export async function getTrekkings(lang: string = 'en') {
    return trekkings.map(t => transformTrek(t, lang));
}

export function getMediaUrl(url: string | undefined) {
    if (!url) return null;
    // Since we are using Unsplash or absolute URLs in the JSON, we just return them.
    return url;
}
