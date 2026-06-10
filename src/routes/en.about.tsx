import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import agronomist from "@/assets/agronomist.jpg";

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: "About Us | OSMAALCA Consulting & Services" },
      {
        name: "description",
        content:
          "OSMAALCA Consulting & Services (OCS): a Mozambican-owned company founded in 2020, based in Maputo and operating nationwide.",
      },
      { property: "og:title", content: "About OSMAALCA" },
      {
        property: "og:description",
        content:
          "Consulting in agribusiness, community development, socio-economic studies and project implementation.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Target,
    title: "Mission",
    text: "To provide services with intelligence and creativity, focused on developing efficient and tailored solutions that respond to each client’s needs, supported by competitive pricing and service excellence.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To become a reference in the consulting and services market, continuously pursuing improvement, innovation and better service to clients, target groups and partners.",
  },
  {
    icon: Heart,
    title: "Values",
    text: "Competence and innovation, ethics and professional confidentiality, commitment and responsibility, respect for the environment, professional excellence and results orientation.",
  },
];

const values = [
  "Competence and innovation",
  "Ethics and professional confidentiality",
  "Commitment and responsibility",
  "Respect for the environment",
  "Professional excellence",
  "Focus on results",
];

const areas = [
  "Agribusiness",
  "Community development",
  "Socio-economic studies and services",
  "Feasibility studies",
  "Agricultural inputs",
  "Import and export",
  "Agro-processing",
  "Baseline studies",
  "Project and programme design, implementation and evaluation",
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Who We Are"
        title="About OSMAALCA"
        subtitle="A serious, dynamic and diligent Mozambican-owned company dedicated to consulting and service delivery since 2020."
      />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src={agronomist}
            alt="OSMAALCA team in the field"
            width={800}
            height={1000}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
          />
          <div className="space-y-6">
            <span className="text-agri font-semibold tracking-widest uppercase text-xs">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest leading-tight">
              A Mozambican company serving development
            </h2>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              <strong>OSMAALCA Consulting & Services</strong>, also known as
              <strong> OCS</strong>, is a serious, dynamic and diligent
              Mozambican-owned company whose main objective is the provision of
              consulting and professional services.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Established and operating since 2020, the company is legally
              incorporated, headquartered in Maputo and able to provide services
              throughout Mozambique through provincial delegations, partner
              companies and consultants across the country.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              We have permanent staff in our core technical areas and, for
              specialized assignments, we mobilize qualified collaborators
              according to the scope and nature of each project, forming
              cohesive and interactive teams.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-forest/10">
              <div>
                <p className="text-3xl font-display font-bold text-forest">2020</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/60 mt-1">
                  Founded
                </p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-forest">100%</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/60 mt-1">
                  Mozambican-owned
                </p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-forest">National</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/60 mt-1">
                  Coverage
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
              Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mt-4">
              Mission, Vision and Values
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
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mt-4 mb-8">
              Principles that guide our work
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
              Areas of Intervention
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mt-4 mb-8">
              Where we work
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
            “Intelligence, creativity and excellence at the service of our clients.”
          </h2>
          <p className="text-cream/70 mt-8 max-w-2xl mx-auto">
            Efficient and tailored solutions, competitive pricing and service
            excellence — in Maputo and across Mozambique.
          </p>
          <Link
            to="/en/contacts"
            className="inline-block mt-10 bg-gold text-forest px-10 py-4 font-bold rounded-sm hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
