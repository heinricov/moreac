import { MetadataRoute } from "next";
import { getManifestConfig, getImagesConfig } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  const manifestConfig = getManifestConfig();
  const imagesConfig = getImagesConfig();

  return {
    name: manifestConfig.name,
    short_name: manifestConfig.shortName,
    description: manifestConfig.description,
    start_url: manifestConfig.startUrl,
    display: manifestConfig.display as any,
    background_color: manifestConfig.backgroundColor,
    theme_color: manifestConfig.themeColor,
    icons: [
      {
        src: imagesConfig.icons.favicon,
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: imagesConfig.icons.icon192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: imagesConfig.icons.icon512,
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: manifestConfig.categories as any,
    lang: manifestConfig.lang,
    orientation: manifestConfig.orientation as any,
  };
}
