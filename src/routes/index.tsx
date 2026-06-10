import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { gallery } from "@/lib/gallery";
import heroImg from "@/assets/hero-valley.jpg";
import agronomistImg from "@/assets/agronomist.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OSMAALCA | Consultoria Agrícola e Agronegócio em Moçambique" },
      {
        name: "description",
        content:
          "Consultoria estratégica e técnica em agronomia, agro-processamento, estudos sócio-económicos e desenvolvimento comunitário em Moçambique.",
      },
      { property: "og:title", content: "OSMAALCA Consultoria & Serviços" },
      {
        property: "og:description",
        content: "Cultivando o futuro do agronegócio moçambicano.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredProjects = projects.slice(0, 2);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-forest">
        <img
          src={heroImg}
          alt="Vista panorâmica de campos agrícolas em Moçambique ao amanhecer"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block border-l-4 border-gold pl-4">
              <span className="text-gold font-semibold tracking-[0.2em] uppercase text-sm">
                Excelência em Agronegócio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-cream leading-[1.05]">
              Soluções sustentáveis para a <span className="text-gold">consultoria e serviços agrícolas</span>
            </h1>
            <p className="text-lg text-cream/80 max-w-lg leading-relaxed">
              Consultoria estratégica e técnica especializada para transformar
              o potencial agrícola em prosperidade sustentável e
              desenvolvimento comunitário.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/servicos"
                className="bg-gold text-forest px-8 py-4 font-bold rounded-sm hover:-translate-y-0.5 hover:shadow-xl transition-all"
              >
                Nossos Serviços
              </Link>
              <Link
                to="/contactos"
                className="border border-cream/30 text-cream px-8 py-4 font-bold rounded-sm hover:bg-cream/10 transition-colors"
              >
                Fale Connosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + WHY */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={agronomistImg}
              alt="Agrónomo moçambicano analisando culturas"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-4 md:-right-10 bg-agri p-8 md:p-10 text-cream shadow-xl">
              <p className="text-3xl md:text-4xl font-display font-bold">+5 Anos</p>
              <p className="text-xs md:text-sm uppercase tracking-widest opacity-80 mt-1">
                De Experiência Local
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <span className="text-agri font-semibold tracking-widest uppercase text-xs">
              Sobre a OSMAALCA
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest leading-tight">
              Compromisso com o Desenvolvimento Rural Sustentável
            </h2>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              A OSMAALCA é mais do que uma consultoria; somos parceiros na
              implementação de soluções resilientes. Atuamos desde estudos de
              viabilidade até a agro-indústria de grande escala, sempre focados
              no impacto sócio-económico positivo.
            </p>
            <ul className="space-y-4 pt-2">
              {[
                {
                  t: "Especialização Local",
                  d: "Profundo conhecimento do mercado e regulamentações de Moçambique.",
                },
                {
                  t: "Inovação Técnica",
                  d: "Métodos modernos de agronomia, gestão de projectos e tecnologia.",
                },
                {
                  t: "Parceria Global",
                  d: "Experiência com ONGs internacionais e instituições públicas.",
                },
              ].map((i) => (
                <li key={i.t} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-gold mt-0.5 shrink-0"
                  />
                  <p>
                    <strong className="text-forest">{i.t}:</strong>{" "}
                    <span className="text-charcoal/70">{i.d}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-forest py-24 text-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="text-gold font-semibold tracking-widest uppercase text-xs">
                Soluções Integradas
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
                Nossas Áreas de Atuação
              </h2>
            </div>
            <Link
              to="/servicos"
              className="text-gold border-b border-gold/40 pb-1 hover:border-gold transition-all inline-flex items-center gap-2"
            >
              Ver todos os serviços <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group bg-white/5 border border-white/10 p-8 hover:bg-agri/20 hover:border-gold/40 transition-all cursor-default"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-gold transition-colors">
                    <Icon className="text-gold group-hover:text-forest" size={22} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
                  <p className="text-cream/65 leading-relaxed text-sm">{s.short}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-agri font-semibold tracking-widest uppercase text-xs">
              Porquê a OSMAALCA
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mt-4">
              Rigor, Impacto e Confiança
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "5+", l: "Anos de experiência" },
              { n: "10+", l: "Projectos entregues" },
              { n: "Nacional", l: "Cobertura" },
              { n: "10+", l: "Parceiros institucionais" },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-white p-8 text-center border-t-4 border-gold shadow-sm hover:shadow-lg transition-shadow"
              >
                <p className="text-5xl font-display font-bold text-forest">{s.n}</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/60 mt-3">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <span className="text-agri font-semibold tracking-widest uppercase text-xs">
                Portfólio
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mt-4">
                Projectos em Destaque
              </h2>
            </div>
            <Link
              to="/projetos"
              className="text-agri font-semibold border-b-2 border-gold pb-1 inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Ver todos os projectos <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-10">
            {featuredProjects.map((p, idx) => (
              <div
                key={p.title}
                className={`bg-white shadow-xl overflow-hidden flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-full min-h-[320px] object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
                  <span className="text-agri font-bold text-xs tracking-widest uppercase mb-4">
                    {p.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-forest mb-5">
                    {p.title}
                  </h3>
                  <p className="text-charcoal/70 mb-8 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-2">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-forest font-display font-bold text-2xl">
                          {m.value}
                        </p>
                        <p className="text-xs uppercase text-charcoal/50 tracking-wider mt-1">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-agri font-semibold tracking-widest uppercase text-xs">
                Em Imagens
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mt-4">
                Do Campo à Indústria
              </h2>
            </div>
            <Link
              to="/galeria"
              className="text-agri font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Ver galeria completa <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {gallery.slice(0, 4).map((g) => (
              <div key={g.alt} className="aspect-square overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gold p-12 md:p-20 text-center space-y-8 rounded-sm">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-forest leading-tight">
              Pronto para impulsionar o seu projecto agrícola?
            </h2>
            <p className="text-forest/80 text-lg max-w-2xl mx-auto">
              Entre em contacto com os nossos especialistas para uma consulta
              inicial e descubra como podemos agregar valor ao seu negócio ou
              iniciativa social.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contactos"
                className="bg-forest text-cream px-10 py-4 font-bold rounded-sm shadow-lg hover:bg-forest/90 transition-colors"
              >
                Agendar Consultoria
              </Link>
              <Link
                to="/servicos"
                className="bg-transparent border-2 border-forest text-forest px-10 py-4 font-bold rounded-sm hover:bg-forest hover:text-cream transition-colors"
              >
                Ver Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
