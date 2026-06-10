import cashew from "@/assets/project-cashew.jpg";
import cotton from "@/assets/project-cotton.jpg";

export const projectsEn = [
  {
    image: cotton,
    category: "Technical Assistance",
    title: "Cotton Outgrower Development and Production — SAM, Lda (Mutuali, Malema)",
    description:
      "Resident technical assistance to SAM, Lda on cotton outgrower development and production, including implementation of a livelihood improvement project for producers in Mutuali, Malema, financed by BCI/GIF.",
    metrics: [
      { value: "2023–2026", label: "Implementation period" },
      { value: "BCI/GIF", label: "Funding partner (2026)" },
    ],
    location: "Mutuali, Malema — Nampula",
    year: "2026",
  },
  {
    image: cashew,
    category: "Agro-Processing",
    title: "Cashew Nut Processing Facility in Nampula",
    description:
      "Implementation of an automated production line that integrated 500 smallholder farming families into the global value chain.",
    metrics: [
      { value: "45%", label: "Income increase" },
      { value: "500+", label: "Beneficiary families" },
    ],
    location: "Nampula",
    year: "2023",
  },
] as const;
