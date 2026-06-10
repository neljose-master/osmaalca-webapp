import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-osmaalca.png";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/60 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="inline-flex items-center text-cream">
            <img src={logo} alt="OSMAALCA Consultoria & Serviços" className="h-14 w-auto bg-cream rounded px-2 py-1" />
          </Link>
          <p className="text-sm leading-relaxed">
            Excelência em serviços de consultoria agrícola e socioeconómica em
            Moçambique. Transformando terra em progresso.
          </p>
        </div>
        <div>
          <h4 className="text-cream font-display font-semibold mb-6">Navegação</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre Nós</Link></li>
            <li><Link to="/servicos" className="hover:text-gold transition-colors">Serviços</Link></li>
            <li><Link to="/projetos" className="hover:text-gold transition-colors">Projetos</Link></li>
            <li><Link to="/galeria" className="hover:text-gold transition-colors">Galeria</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-cream font-display font-semibold mb-6">Serviços</h4>
          <ul className="space-y-3 text-sm">
            <li>Consultoria Agrícola</li>
            <li>Agro-Processamento</li>
            <li>Import & Export</li>
            <li>Avaliação de Programas</li>
          </ul>
        </div>
        <div>
          <h4 className="text-cream font-display font-semibold mb-6">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-gold shrink-0" /> Av. Joaquim Chissano nr. 9, 5º andar, flat-9, Maputo</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-gold shrink-0" /> osmaalca@gmail.com</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-gold shrink-0" /> +258 84 258 5135</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-gold shrink-0" /> WhatsApp: +258 87 364 5783</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs">
        <p>© {new Date().getFullYear()} OSMAALCA Consultoria & Serviços. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream">Termos de Uso</a>
          <a href="#" className="hover:text-cream">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
