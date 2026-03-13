const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function getTrekBySlug(slug: string) {
    const res = await fetch(`${STRAPI_URL}/api/trekkings?filters[slug][$eq]=${slug}&populate=*`, {
        cache: 'no-store' // For development, we want fresh data
    });

    if (!res.ok) {
        throw new Error('Failed to fetch trek');
    }

    const json = await res.json();
    return json.data?.[0] || null;
}

export async function getTrekkings() {
    const res = await fetch(`${STRAPI_URL}/api/trekkings?populate=*`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch trekkings');
    }

    const json = await res.json();
    return json.data || [];
}

export function getStrapiMedia(url: string | undefined) {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    return `${STRAPI_URL}${url}`;
}
