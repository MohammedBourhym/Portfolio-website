import { getCollection } from "astro:content";
import { SITE_URL } from "../data/config";

export async function GET() {
  const siteUrl = SITE_URL;
  const posts = await getCollection("posts");
  const isPublishedPost = posts.filter(
    (post) => post.data.isPublish && !post.data.isDraft
  );

  // Static pages
  const staticPages = [
    "",
    "/posts/",
    "/projects/",
    "/certifications/",
    "/hyperdoc/",
    "/geiw-journey/",
    "/hidden-job-market-commentary/",
  ];

  const result = `  
  <?xml version="1.0" encoding="UTF-8"?>  
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  
    ${staticPages
      .map((page) => `<url><loc>${siteUrl}${page}</loc></url>`)
      .join("\n")}
   
    ${isPublishedPost
      .map((post) => {
        const lastMod = post.data.publishedAt.toISOString();
        return `<url><loc>${siteUrl}/posts/${post.slug}/</loc><lastmod>${lastMod}</lastmod></url>`;
      })
      .join("\n")}  
  </urlset>  
  `.trim();

  return new Response(result, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
