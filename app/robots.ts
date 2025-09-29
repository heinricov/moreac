import { MetadataRoute } from "next";
import { getProjectInfo } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  const project = getProjectInfo();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/api/"],
    },
    sitemap: `${project.url}/sitemap.xml`,
  };
}
