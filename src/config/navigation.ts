export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: unknown;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [] as readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
