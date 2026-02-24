interface ExperienceItem {
  date: string;
  title: string;
  description: string;
}

const Experience: ExperienceItem[] = [
  {
    date: "December 2024 - Present",
    title: "QA Engineer - Maxwell",
    description:
      "Perform extensive manual QA and regression testing for complex mortgage platforms, while contributing to test strategy, tooling, and automation readiness.",
  },
  {
    date: "August 2024 - December 2024",
    title: "Technical Writer - Amaris Consulting - Thales",
    description:
      "Created clear, consistent technical documentation in close collaboration with engineering teams.",
  },
  {
    date: "May 2022 - August 2024",
    title: "Technical Product and QA Analyst - Revvin (A Maxwell Company)",
    description:
      "Led manual QA and regression testing while also covering product ownership, backlog management, and release support.",
  },
  {
    date: "December 2013 - December 2020",
    title:
      "Research Assistant - Universidad de los Andes - IRD - Pontificia Universidad Javeriana",
    description:
      "Research assistant and early-career researcher across multiple academic institutions, working on data analysis, scientific research, and methodology development (Python, R&D).",
  },
];

export { Experience };
