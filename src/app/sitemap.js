import { getBlogPosts } from "@/lib/utils";

export const baseUrl = "http://localhost:3000/";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/archive/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/archive"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
