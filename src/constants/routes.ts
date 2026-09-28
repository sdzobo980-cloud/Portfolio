export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  ABOUT: "/about",
} as const;

export type ROUTESType = typeof ROUTES;
export type ROUTESTypeKeys = keyof ROUTESType;
