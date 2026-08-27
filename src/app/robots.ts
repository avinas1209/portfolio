import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/paths";

// Metadata routes compile to Route Handlers, which `output: export` refuses to
// build unless they are pinned static.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
