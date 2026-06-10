import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-osmaalca.png";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/servicos", label: "Serviços" },
  { to: "/projetos", label: "Projetos" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-forest text-cream/90 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="OSMAALCA Consultoria & Serviços" className="h-12 w-auto bg-cream rounded px-2 py-1" />
        </Link>

        <div className="hidden lg:flex gap-7 text-[13px] font-medium uppercase tracking-[0.15em]">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contactos"
          className="hidden md:inline-flex bg-agri px-5 py-2.5 text-xs font-semibold rounded uppercase tracking-widest hover:bg-agri/90 transition-all"
        >
          Consultoria
        </Link>

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
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium uppercase tracking-widest hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
