import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { services } from "@/lib/services";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | OSMAALCA Consultoria & Serviços" },
      {
        name: "description",
        content:
          "Consultoria agrícola, agro-processamento, estudos sócio-económicos, desenvolvimento comunitário, agro-inputs, import/export e mais.",
      },
      { property: "og:title", content: "Serviços OSMAALCA" },
      {
        property: "og:description",
        content: "Soluções integradas para o agronegócio moçambicano.",
      },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Serviços"
        title="Soluções Integradas para o Agronegócio"
        subtitle="Combinamos rigor técnico, experiência local e visão estratégica para entregar consultoria de impacto em todas as fileiras agrícolas."
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white p-10 border-l-4 border-gold hover:shadow-xl hover:border-agri transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-forest/5 flex items-center justify-center rounded shrink-0 group-hover:bg-agri/10 transition-colors">
                      <Icon className="text-agri" size={26} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="text-xs font-mono text-gold">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display font-bold text-xl text-forest">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-charcoal/70 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-forest">
            Não encontrou o que procura?
          </h2>
          <p className="text-charcoal/70 mt-4 text-lg">
            Desenhamos serviços à medida das necessidades do seu projecto.
          </p>
          <Link
            to="/contactos"
            className="inline-block mt-8 bg-forest text-cream px-10 py-4 font-bold rounded-sm hover:bg-agri transition-colors"
          >
            Fale com um Consultor
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
