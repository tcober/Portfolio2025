/**
 * Composable to fetch OpenGraph data from a URL.
 * Runs at build time during static generation only.
 */
export const useOgData = async (url: string) => {
  const nuxtApp = useNuxtApp();
  const key = `og-preview-${url}`;

  // On client, always use cached data from payload (never fetch)
  if (import.meta.client) {
    const cachedData = nuxtApp.payload.data[key] ?? {
      title: null,
      description: null,
      image: null,
      siteName: null,
    };
    return {
      data: ref(cachedData),
      status: ref("success" as const),
      error: ref(null),
      refresh: () => Promise.resolve(),
      clear: () => {},
    };
  }

  // Server-side: fetch the OG data
  return useAsyncData(
    key,
    async () => {
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
    },
    {
      server: true,
      lazy: false,
    },
  );
};
