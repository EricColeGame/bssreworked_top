export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "BSS Reworked Wiki",
  shortName: "BSS Reworked",
  logoText: "BR",
  tagline: "Complete Guides, Codes, Recipes & Tier Lists",
  description: "Your ultimate guide to BSS Reworked on Roblox! Explore active working codes, seafood recipes, best upgrades, profit strategies, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bssreworked.top",
  gameUrl: "https://www.roblox.com/games/138786357387089/BSS-Reworked",
  heroVideoId: "a8dItFRBGTs", // Roblox BSS Reworked codes & gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
