import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/en/contacts")({
  head: () => ({
    meta: [
      { title: "Contacts | OSMAALCA Consulting & Services" },
      {
        name: "description",
        content:
          "Contact OSMAALCA in Maputo, Mozambique. Agricultural and agribusiness consulting for companies, NGOs and institutions.",
      },
      { property: "og:title", content: "OSMAALCA Contacts" },
      {
        property: "og:description",
        content: "Speak with our consulting team.",
      },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contacts"
        title="Let’s Discuss Your Project"
        subtitle="Our team is available to discuss partnerships, projects and consulting opportunities across Mozambique."
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-agri font-semibold tracking-widest uppercase text-xs">
                Where to find us
              </span>
              <h2 className="text-3xl font-display font-bold text-forest mt-4">
                Contact Information
              </h2>
            </div>

            {[
              {
                icon: MapPin,
                title: "Office",
                lines: [
                  "Avenida Joaquim Chissano nr. 9",
                  "5th floor, flat-9",
                  "Maputo, Mozambique",
                ],
              },
              {
                icon: Mail,
                title: "E-mail",
                lines: ["osmaalca@gmail.com"],
              },
              {
                icon: Phone,
                title: "Phone / WhatsApp",
                lines: [
                  "Mobile: +258 84 258 5135",
                  "WhatsApp: +258 87 364 5783",
                ],
              },
              {
                icon: Clock,
                title: "Office Hours",
                lines: ["Monday – Friday", "08:00 – 17:00"],
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="flex gap-5">
                  <div className="w-12 h-12 bg-forest text-gold flex items-center justify-center rounded shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-forest mb-1">
                      {c.title}
                    </p>
                    {c.lines.map((l) => (
                      <p key={l} className="text-charcoal/70 text-sm">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white p-10 shadow-xl">
            {sent ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 bg-agri text-cream rounded-full flex items-center justify-center mx-auto">
                  <Send size={24} />
                </div>
                <h3 className="font-display font-bold text-2xl text-forest">
                  Message sent!
                </h3>
                <p className="text-charcoal/70 max-w-md mx-auto">
                  Thank you for contacting us. Our team will reply within two
                  business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-display font-bold text-2xl text-forest">
                    Send us a message
                  </h3>
                  <p className="text-charcoal/60 text-sm mt-2">
                    Complete the form and we will get back to you.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required />
                  <Field label="Organisation" name="org" />
                  <Field label="E-mail" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-forest mb-2">
                    Area of interest
                  </label>
                  <select className="w-full border border-forest/15 px-4 py-3 bg-cream/50 focus:outline-none focus:border-agri text-sm">
                    <option>Agricultural Consulting</option>
                    <option>Agro-Processing</option>
                    <option>Socio-Economic Studies</option>
                    <option>Community Development</option>
                    <option>Import & Export</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-forest mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-forest/15 px-4 py-3 bg-cream/50 focus:outline-none focus:border-agri text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-forest text-cream px-8 py-4 font-bold rounded-sm hover:bg-agri transition-colors"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-forest mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-forest/15 px-4 py-3 bg-cream/50 focus:outline-none focus:border-agri text-sm"
      />
    </div>
  );
}
