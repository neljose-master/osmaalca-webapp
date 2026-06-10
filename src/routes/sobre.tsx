import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import agronomist from "@/assets/agronomist.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós | OSMAALCA Consultoria & Serviços" },
      {
        name: "description",
        content:
          "OSMAALCA Consultoria & Serviços (OCS): empresa de capital moçambicano, fundada em 2020, com sede em Maputo e actuação em todo o território nacional.",
      },
      { property: "og:title", content: "Sobre a OSMAALCA" },
      {
        property: "og:description",
        content:
          "Consultoria em agro-negócios, desenvolvimento comunitário, estudos sócio-económicos e implementação de projectos.",
      },
    ],
  }),
  component: SobrePage,
});

const pillars = [
  {
    icon: Target,
    title: "Missão",
    text: "Prestar serviços com inteligência e criatividade, com foco no desenvolvimento de soluções eficientes e personalizadas, procurando satisfazer as diferentes necessidades de cada cliente, aliado a preços competitivos e excelência no atendimento.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser uma referência no mercado de Consultoria e Serviços, procurando incessantemente a auto-superação, inovar e melhor servir os seus clientes, público-alvo e parceiros.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Competência e inovação, ética e sigilo profissional, compromisso e responsabilidade, respeito pelo meio ambiente, brio profissional e foco nos resultados.",
  },
];

const values = [
  "Competência e Inovação",
  "Ética e Sigilo profissional",
  "Compromisso e Responsabilidade",
  "Respeito ao meio ambiente",
  "Brio profissional",
  "Foco nos resultados",
];

const areas = [
  "Agro-negócios",
  "Desenvolvimento comunitário",
  "Estudos e serviços sócio-económicos",
  "Estudos de viabilidade",
  "Agro-insumos",
  "Importação e exportação",
  "Agro-processamento",
  "Estudos de base",
  "Formulação, implementação e avaliação de projectos e programas",
];

function SobrePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quem Somos"
        title="Sobre a OSMAALCA"
        subtitle="Empresa de capital moçambicano, séria, dinâmica e diligente, dedicada à prestação de serviços de Consultoria e Serviços desde 2020."
      />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src={agronomist}
            alt="Equipa da OSMAALCA no terreno"
            width={800}
            height={1000}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
          />
          <div className="space-y-6">
            <span className="text-agri font-semibold tracking-widest uppercase text-xs">
              A Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest leading-tight">
              Uma empresa moçambicana ao serviço do desenvolvimento
            </h2>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              A <strong>OSMAALCA Consultoria & Serviços</strong>, abreviadamente
              designada por <strong>OCS</strong>, é uma empresa de capital
              moçambicano, séria, dinâmica e diligente, cujo objecto principal
              é a prestação de serviços de Consultoria e Serviços.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Estabelecida e em operação desde 2020, está legalmente
              instituída, com sede na cidade de Maputo e capacidade de prestar
              serviços em todo o território nacional, através das suas
              delegações provinciais, empresas e consultores parceiros
              espalhados por todo o país.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Dispomos de colaboradores permanentes nas áreas adoptadas como
              vitais e, para áreas específicas, contamos com colaboradores
              aptos a intervir sempre que o âmbito e a natureza dos projectos
              exijam, formando equipas de trabalho homogéneas e interactivas.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-forest/10">
              <div>
                <p className="text-3xl font-display font-bold text-forest">2020</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/60 mt-1">
                  Fundação
                </p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-forest">100%</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/60 mt-1">
                  Capital Moçambicano
                </p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-forest">Nacional</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/60 mt-1">
                  Cobertura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-agri font-semibold tracking-widest uppercase text-xs">
              Princípios
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mt-4">
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-cream p-10 border-t-4 border-gold hover:shadow-xl transition-shadow"
                >
                  <Icon className="text-agri mb-6" size={32} />
                  <h3 className="font-display font-bold text-2xl text-forest mb-4">
                    {p.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-agri font-semibold tracking-widest uppercase text-xs">
              Os Nossos Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mt-4 mb-8">
              Princípios que guiam o nosso trabalho
            </h2>
            <ul className="space-y-4">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                  <span className="text-charcoal/80 text-lg">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-agri font-semibold tracking-widest uppercase text-xs">
              Áreas de Actuação
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mt-4 mb-8">
              Onde intervimos
            </h2>
            <ul className="space-y-4">
              {areas.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 className="text-agri shrink-0 mt-1" size={20} />
                  <span className="text-charcoal/80 text-lg">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Award className="text-gold mx-auto mb-6" size={40} />
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight max-w-3xl mx-auto">
            "Inteligência, criatividade e excelência ao serviço dos nossos clientes."
          </h2>
          <p className="text-cream/70 mt-8 max-w-2xl mx-auto">
            Soluções eficientes e personalizadas, com preços competitivos e
            excelência no atendimento — em Maputo e em todo o território
            nacional.
          </p>
          <Link
            to="/contactos"
            className="inline-block mt-10 bg-gold text-forest px-10 py-4 font-bold rounded-sm hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            Trabalhe Connosco
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
