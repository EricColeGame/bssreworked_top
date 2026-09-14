export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: unknown;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  {
    key: "guide",
    isContentType: true,
    path: "/guide",
  },
  {
    key: "mechanics",
    isContentType: true,
    path: "/mechanics",
  },
  {
    key: "items",
    isContentType: true,
    path: "/items",
  },
  {
    key: "controls",
    isContentType: true,
    path: "/controls",
  },
  {
    key: "progression",
    isContentType: true,
    path: "/progression",
  },
  {
    key: "codes",
    isContentType: true,
    path: "/codes",
  },
  {
    key: "maps",
    isContentType: true,
    path: "/maps",
  },
  {
    key: "community",
    isContentType: true,
    path: "/community",
  },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
