import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { galleryEn } from "@/lib/gallery-en";

export const Route = createFileRoute("/en/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | OSMAALCA Consulting & Services" },
      {
        name: "description",
        content:
          "Images of OSMAALCA’s field work: farms, processing, communities and partnerships in Mozambique.",
      },
      { property: "og:title", content: "OSMAALCA Gallery" },
      {
        property: "og:description",
        content: "From field to industry — in images.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="From Field to Industry"
        subtitle="Moments captured in the projects, communities and facilities where OSMAALCA operates."
      />
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryEn.map((g, i) => (
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
