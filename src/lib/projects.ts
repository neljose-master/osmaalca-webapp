import cashew from "@/assets/project-cashew.jpg";
import cotton from "@/assets/project-cotton.jpg";

export const projects = [
  {
    image: cotton,
    category: "Assistência Técnica",
    title: "Fomento e Produção de Algodão — SAM, Lda (Mutuali, Malema)",
    description:
      "Assistência técnica residente à SAM, Lda em questões de fomento e produção de algodão e implementação de projecto para a melhoria das condições de vida dos produtores em Mutuali, Malema, financiado pela BCI/GIF.",
    metrics: [
      { value: "2023–2026", label: "Período de actuação" },
      { value: "BCI/GIF", label: "Financiamento (2026)" },
    ],
    location: "Mutuali, Malema — Nampula",
    year: "2026",
  },
  {
    image: cashew,
    category: "Agro-Processamento",
    title: "Unidade de Processamento de Castanha em Nampula",
    description:
      "Implementação de linha de produção automatizada que integrou 500 famílias de pequenos produtores à cadeia de valor global.",
    metrics: [
      { value: "45%", label: "Aumento de renda" },
      { value: "500+", label: "Famílias beneficiadas" },
    ],
    location: "Nampula",
    year: "2023",
  },
] as const;
