export default defineEventHandler(async (event) => {
  const { url } = getQuery(event);

  if (!url || typeof url !== "string") {
    throw createError({ statusCode: 400, message: "URL is required" });
  }

  try {
    const html = await $fetch<string>(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; LinkPreviewBot/1.0)" },
      responseType: "text",
    });

    const getMeta = (name: string): string | null => {
      const byProperty =
        html.match(
          new RegExp(
            `<meta[^>]+property=["']${name}["'][^>]+content=["']([^"']+)["']`,
            "i"
          )
        ) ??
        html.match(
          new RegExp(
            `<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${name}["']`,
            "i"
          )
        );
      if (byProperty) return byProperty[1];

      return (
        html.match(
          new RegExp(
            `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`,
            "i"
          )
        )?.[1] ??
        html.match(
          new RegExp(
            `<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`,
            "i"
          )
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
});
