import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos | OSMAALCA Consultoria & Serviços" },
      {
        name: "description",
        content:
          "Contacte a OSMAALCA em Maputo, Moçambique. Consultoria agrícola e agronegócio para empresas, ONGs e instituições.",
      },
      { property: "og:title", content: "Contactos OSMAALCA" },
      {
        property: "og:description",
        content: "Fale com a nossa equipa de consultores.",
      },
    ],
  }),
  component: ContactosPage,
});

function ContactosPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contactos"
        title="Vamos Falar do Seu Projecto"
        subtitle="A nossa equipa está disponível para discutir parcerias, projectos e oportunidades de consultoria em todo o território nacional."
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-agri font-semibold tracking-widest uppercase text-xs">
                Onde nos encontrar
              </span>
              <h2 className="text-3xl font-display font-bold text-forest mt-4">
                Informações de Contacto
              </h2>
            </div>

            {[
              {
                icon: MapPin,
                title: "Escritório",
                lines: [
                  "Avenida Joaquim Chissano nr. 9",
                  "5º andar, flat-9",
                  "Maputo, Moçambique",
                ],
              },
              {
                icon: Mail,
                title: "E-mail",
                lines: ["osmaalca@gmail.com"],
              },
              {
                icon: Phone,
                title: "Telefone / WhatsApp",
                lines: [
                  "Mobile: +258 84 258 5135",
                  "WhatsApp: +258 87 364 5783",
                ],
              },
              {
                icon: Clock,
                title: "Horário",
                lines: ["Segunda – Sexta", "08:00 – 17:00"],
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
                  Mensagem enviada!
                </h3>
                <p className="text-charcoal/70 max-w-md mx-auto">
                  Obrigado pelo seu contacto. A nossa equipa responderá em até
                  48 horas úteis.
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
                    Envie-nos uma mensagem
                  </h3>
                  <p className="text-charcoal/60 text-sm mt-2">
                    Preencha o formulário e entraremos em contacto.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Nome completo" name="name" required />
                  <Field label="Organização" name="org" />
                  <Field label="E-mail" name="email" type="email" required />
                  <Field label="Telefone" name="phone" type="tel" />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-forest mb-2">
                    Área de interesse
                  </label>
                  <select className="w-full border border-forest/15 px-4 py-3 bg-cream/50 focus:outline-none focus:border-agri text-sm">
                    <option>Consultoria Agrícola</option>
                    <option>Agro-Processamento</option>
                    <option>Estudos Sócio-Económicos</option>
                    <option>Desenvolvimento Comunitário</option>
                    <option>Import & Export</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-forest mb-2">
                    Mensagem
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-forest/15 px-4 py-3 bg-cream/50 focus:outline-none focus:border-agri text-sm resize-none"
                    placeholder="Conte-nos sobre o seu projecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-forest text-cream px-8 py-4 font-bold rounded-sm hover:bg-agri transition-colors"
                >
                  Enviar Mensagem <Send size={16} />
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
