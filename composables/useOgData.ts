/**
 * OG data type definition
 */
export interface OgData {
  title: string | null;
  description: string | null;
  image: string | null;
  siteName: string | null;
}

/**
 * Fetch OG data from a URL (server-side only).
 * Used to prefetch OG data during posts fetch.
 */
export async function fetchOgData(url: string): Promise<OgData> {
  try {
    const html = await $fetch<string>(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; LinkPreviewBot/1.0)",
      },
      responseType: "text",
    });

    const getMeta = (name: string): string | null => {
      const byProperty =
        html.match(
          new RegExp(
            `<meta[^>]+property=["']${name}["'][^>]+content=["']([^"']+)["']`,
            "i",
          ),
        ) ??
        html.match(
          new RegExp(
            `<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${name}["']`,
            "i",
          ),
        );
      if (byProperty?.[1]) return byProperty[1];

      return (
        html.match(
          new RegExp(
            `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`,
            "i",
          ),
        )?.[1] ??
        html.match(
          new RegExp(
            `<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`,
            "i",
          ),
        )?.[1] ??
        null
      );
    };

    let image = getMeta("og:image") ?? getMeta("twitter:image");

    // Resolve relative image URLs to absolute
    if (image && !image.startsWith("http")) {
      const { protocol, host } = new URL(url);
      image = image.startsWith("/")
        ? `${protocol}//${host}${image}`
        : `${protocol}//${host}/${image}`;
    }

    // Validate image URL exists (avoid broken images)
    if (image) {
      try {
        const response = await $fetch.raw(image, {
          method: "HEAD",
          timeout: 3000,
        });
        if (!response.ok) {
          image = null;
        }
      } catch {
        image = null;
      }
    }

    return {
      title:
        getMeta("og:title") ??
        getMeta("twitter:title") ??
        html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] ??
        null,
      description:
        getMeta("og:description") ??
        getMeta("twitter:description") ??
        getMeta("description") ??
        null,
      image,
      siteName: getMeta("og:site_name") ?? null,
    };
  } catch {
    return { title: null, description: null, image: null, siteName: null };
  }
}

/**
 * Composable to get OG data from cache or server.
 * Used as fallback when embedded _ogData is not available.
 */
export const useOgData = (url: string) => {
  const key = `og-preview-${url}`;

  return useAsyncData(
    key,
    async () => {
      // Only fetch on server during prerender
      if (import.meta.client) {
        return null;
      }
      return fetchOgData(url);
    },
    {
      server: true,
      lazy: false,
      getCachedData: (key, nuxtApp) => {
        return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
      },
      default: () => ({
        title: null,
        description: null,
        image: null,
        siteName: null,
      }),
    },
  );
};
