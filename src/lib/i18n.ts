export type Language = "pt" | "en";

export const routeMap = {
  home: { pt: "/", en: "/en" },
  about: { pt: "/sobre", en: "/en/about" },
  services: { pt: "/servicos", en: "/en/services" },
  projects: { pt: "/projetos", en: "/en/projects" },
  gallery: { pt: "/galeria", en: "/en/gallery" },
  contacts: { pt: "/contactos", en: "/en/contacts" },
} as const;

export type RouteKey = keyof typeof routeMap;

export function getLanguageFromPathname(pathname: string): Language {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

export function localizedPath(route: RouteKey, language: Language) {
  return routeMap[route][language];
}

export function getAlternateLanguagePath(pathname: string, targetLanguage: Language) {
  const currentRoute = Object.values(routeMap).find(
    (routes) => routes.pt === pathname || routes.en === pathname,
  );

  if (!currentRoute) {
    return targetLanguage === "en" ? routeMap.home.en : routeMap.home.pt;
  }

  return currentRoute[targetLanguage];
}

export const navigation = {
  pt: [
    { route: "home", label: "Início" },
    { route: "about", label: "Sobre Nós" },
    { route: "services", label: "Serviços" },
    { route: "projects", label: "Projetos" },
    { route: "gallery", label: "Galeria" },
    { route: "contacts", label: "Contactos" },
  ],
  en: [
    { route: "home", label: "Home" },
    { route: "about", label: "About Us" },
    { route: "services", label: "Services" },
    { route: "projects", label: "Projects" },
    { route: "gallery", label: "Gallery" },
    { route: "contacts", label: "Contacts" },
  ],
} satisfies Record<Language, { route: RouteKey; label: string }[]>;

export const commonCopy = {
  pt: {
    consultation: "Consultoria",
    switchLabel: "EN",
    logoAlt: "OSMAALCA Consultoria & Serviços",
  },
  en: {
    consultation: "Consulting",
    switchLabel: "PT",
    logoAlt: "OSMAALCA Consulting & Services",
  },
} satisfies Record<Language, Record<string, string>>;
