import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { CONTENT_TYPES } from "@/config/navigation";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bssreworked.top";

  // Static paths that always exist
  const contentTypePaths = CONTENT_TYPES.map((ct) => `/${ct}`);
  const staticPaths = [
    "/",
    ...contentTypePaths,
    "/privacy-policy",
    "/terms-of-service",
    "/copyright",
    "/about",
  ];

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...staticPaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : path === "/codes" || path === "/guide" ? 0.8 : 0.6,
    })),
  );
}
