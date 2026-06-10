import { Link, useLocation } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-osmaalca.png";
import {
  commonCopy,
  getLanguageFromPathname,
  localizedPath,
  navigation,
} from "@/lib/i18n";

const footerCopy = {
  pt: {
    description:
      "Excelência em serviços de consultoria agrícola e socioeconómica em Moçambique. Transformando terra em progresso.",
    navigation: "Navegação",
    services: "Serviços",
    contact: "Contacto",
    serviceItems: [
      "Consultoria Agrícola",
      "Agro-Processamento",
      "Import & Export",
      "Avaliação de Programas",
    ],
    rights: "Todos os direitos reservados.",
    terms: "Termos de Uso",
    privacy: "Política de Privacidade",
  },
  en: {
    description:
      "Excellence in agricultural and socio-economic consulting services in Mozambique. Turning land into progress.",
    navigation: "Navigation",
    services: "Services",
    contact: "Contact",
    serviceItems: [
      "Agricultural Consulting",
      "Agro-Processing",
      "Import & Export",
      "Programme Evaluation",
    ],
    rights: "All rights reserved.",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
  },
} as const;

export function Footer() {
  const { pathname } = useLocation();
  const language = getLanguageFromPathname(pathname);
  const copy = footerCopy[language];
  const common = commonCopy[language];
  const navItems = navigation[language].filter((item) => item.route !== "home" && item.route !== "contacts");

  return (
    <footer className="bg-charcoal text-cream/60 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to={localizedPath("home", language)} className="inline-flex items-center text-cream">
            <img
              src={logo}
              alt={common.logoAlt}
              className="h-14 w-auto bg-cream rounded px-2 py-1"
            />
          </Link>
          <p className="text-sm leading-relaxed">{copy.description}</p>
        </div>
        <div>
          <h4 className="text-cream font-display font-semibold mb-6">{copy.navigation}</h4>
          <ul className="space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.route}>
                <Link
                  to={localizedPath(item.route, language)}
                  className="hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-cream font-display font-semibold mb-6">{copy.services}</h4>
          <ul className="space-y-3 text-sm">
            {copy.serviceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-cream font-display font-semibold mb-6">{copy.contact}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-gold shrink-0" /> Av. Joaquim Chissano nr. 9, 5º andar, flat-9, Maputo</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-gold shrink-0" /> osmaalca@gmail.com</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-gold shrink-0" /> +258 84 258 5135</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-gold shrink-0" /> WhatsApp: +258 87 364 5783</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs">
        <p>© {new Date().getFullYear()} OSMAALCA Consultoria & Serviços. {copy.rights}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream">{copy.terms}</a>
          <a href="#" className="hover:text-cream">{copy.privacy}</a>
        </div>
      </div>
    </footer>
  );
}
