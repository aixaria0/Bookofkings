import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const basePath = process.env.GITHUB_PAGES === "true" ? "/Bookofkings" : "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Book of Kings · The Private Codex",
    short_name: "Book of Kings",
    description:
      "A private daily ritual inspired by Persian storytelling—three choices, one mirror, and a chronicle that stays yours.",
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: "#05080d",
    theme_color: "#05080d",
  };
}
