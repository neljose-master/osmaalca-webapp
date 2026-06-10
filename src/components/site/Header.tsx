import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-osmaalca.png";
import {
  commonCopy,
  getAlternateLanguagePath,
  getLanguageFromPathname,
  localizedPath,
  navigation,
  type Language,
} from "@/lib/i18n";

function activeOptionsFor(route: string) {
  return { exact: route === "/" || route === "/en" };
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const language = getLanguageFromPathname(pathname);
  const targetLanguage: Language = language === "pt" ? "en" : "pt";
  const alternateLanguagePath = getAlternateLanguagePath(pathname, targetLanguage);
  const copy = commonCopy[language];
  const navItems = navigation[language];

  return (
    <nav className="sticky top-0 z-50 bg-forest text-cream/90 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to={localizedPath("home", language)} className="flex items-center gap-3">
          <img
            src={logo}
            alt={copy.logoAlt}
            className="h-12 w-auto bg-cream rounded px-2 py-1"
          />
        </Link>

        <div className="hidden lg:flex gap-7 text-[13px] font-medium uppercase tracking-[0.15em]">
          {navItems.map((item) => {
            const path = localizedPath(item.route, language);

            return (
              <Link
                key={item.route}
                to={path}
                className="hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                activeOptions={activeOptionsFor(path)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to={alternateLanguagePath}
            className="inline-flex border border-cream/20 px-3 py-2 text-xs font-semibold rounded uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
            aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {copy.switchLabel}
          </Link>

          <Link
            to={localizedPath("contacts", language)}
            className="inline-flex bg-agri px-5 py-2.5 text-xs font-semibold rounded uppercase tracking-widest hover:bg-agri/90 transition-all"
          >
            {copy.consultation}
          </Link>
        </div>

        <button
          className="lg:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-forest">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => {
              const path = localizedPath(item.route, language);

              return (
                <Link
                  key={item.route}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium uppercase tracking-widest hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={activeOptionsFor(path)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-gold/20 flex gap-3">
              <Link
                to={alternateLanguagePath}
                onClick={() => setOpen(false)}
                className="inline-flex border border-cream/20 px-4 py-2 text-xs font-semibold rounded uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
              >
                {copy.switchLabel}
              </Link>
              <Link
                to={localizedPath("contacts", language)}
                onClick={() => setOpen(false)}
                className="inline-flex bg-agri px-4 py-2 text-xs font-semibold rounded uppercase tracking-widest hover:bg-agri/90 transition-all"
              >
                {copy.consultation}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
