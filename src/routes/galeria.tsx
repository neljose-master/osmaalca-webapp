import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { gallery } from "@/lib/gallery";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria | OSMAALCA Consultoria & Serviços" },
      {
        name: "description",
        content:
          "Imagens do trabalho da OSMAALCA no terreno: campos, processamento, comunidades e parcerias em Moçambique.",
      },
      { property: "og:title", content: "Galeria OSMAALCA" },
      {
        property: "og:description",
        content: "Do campo à indústria — em imagens.",
      },
    ],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Galeria"
        title="Do Campo à Indústria"
        subtitle="Momentos capturados nos projectos, comunidades e instalações onde a OSMAALCA actua."
      />
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <div
                key={i}
                className={`overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow ${
                  i % 5 === 0 ? "md:row-span-2 aspect-square md:aspect-[3/4]" : "aspect-square"
                }`}
              >
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
    </SiteLayout>
  );
}
