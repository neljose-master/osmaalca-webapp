import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Calendar } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { projectsEn } from "@/lib/projects-en";
import { timelineProjectsEn } from "@/lib/projects-timeline-en";

export const Route = createFileRoute("/en/projects")({
  head: () => ({
    meta: [
      { title: "Projects | OSMAALCA Consulting & Services" },
      {
        name: "description",
        content:
          "OSMAALCA project portfolio: agro-processing, irrigation, community capacity building and socio-economic studies in Mozambique.",
      },
      { property: "og:title", content: "OSMAALCA Projects" },
      {
        property: "og:description",
        content: "Real impact cases in Mozambican agribusiness.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="Projects that Generate Real Impact"
        subtitle="Initiatives implemented in partnership with producers, companies, NGOs and public institutions across Mozambique."
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-3">
              Featured projects
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest">
              Reference cases
            </h2>
          </div>
          <div className="space-y-12">
            {projectsEn.map((p, idx) => (
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
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-xs uppercase tracking-widest">
                    <span className="text-agri font-bold">{p.category}</span>
                    <span className="text-charcoal/40">•</span>
                    <span className="text-charcoal/60 inline-flex items-center gap-1.5">
                      <MapPin size={12} /> {p.location}
                    </span>
                    <span className="text-charcoal/60 inline-flex items-center gap-1.5">
                      <Calendar size={12} /> {p.year}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-forest mb-5 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-charcoal/70 mb-8 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-6 border-t border-forest/10">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-forest font-display font-bold text-3xl">
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

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-3">
              Track record
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest">
              Project timeline
            </h2>
            <p className="text-charcoal/70 mt-4 leading-relaxed">
              A selection of studies, business plans, technical assistance
              assignments and programmes implemented by OSMAALCA in recent
              years.
            </p>
          </div>

          <ol className="relative border-l-2 border-forest/15 space-y-10 ml-3">
            {timelineProjectsEn.map((item, idx) => (
              <li key={idx} className="pl-8 relative">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gold ring-4 ring-cream" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-forest font-display font-bold text-sm">
                    <Calendar size={14} /> {item.period}
                  </span>
                  {item.category && (
                    <>
                      <span className="text-charcoal/30">•</span>
                      <span className="text-xs uppercase tracking-widest text-agri font-bold">
                        {item.category}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-charcoal/80 leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-forest text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Have a project in mind?
          </h2>
          <p className="text-cream/70 mt-4 text-lg">
            Share your vision with us. We design the technical pathway to make
            it a reality.
          </p>
          <Link
            to="/en/contacts"
            className="inline-block mt-8 bg-gold text-forest px-10 py-4 font-bold rounded-sm hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
