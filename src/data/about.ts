interface Abilities {
  title: string;
  description?: string;
}

interface AboutItem {
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
  description: string;
  abilities?: Abilities[];
  button?: string;
}

const About: AboutItem[] = [
  {
    image: "meImage.src",
    alt: "Photo of Diana",
    description:
      "I started my career in biology, but my path has always been about understanding systems — how they work, how they fail, and how small details affect the whole. Over time, that curiosity led me from scientific research into QA, product, data, and development, always with the same goal: to build and care for things thoughtfully and responsibly.",
  },
  {
    image: "QAandProductImage.src",
    alt: "Product Roadmap",
    title: `QA &amp; Product Strategy`,
    subtitle: "Strategic Anchor",
    description:
      "Moved into software through QA and Product roles, focusing on manual testing, regression, system behavior, and protecting product quality in real-world environments where edge cases matter.",
    abilities: [
      {
        title: "Quality Engineering",
      },
      {
        title: "Product Owner",
      },
      {
        title: "Technical Writer",
      },
    ],
  },
  {
    image: "outsideImage.src",
    alt: "Leisure Hobby",
    title: "Tending",
    subtitle: "Offscreen",
    description: `Knitting, watercolor, baking, and plant care <br>—<br>Same curiosity, different medium.`,
  },
  {
    image: "developmentImage.src",
    alt: "Code Editor",
    title: "Software Development",
    subtitle: "Technical Growth",
    description:
      "Continuously learning development tools to better build, test, and improve the systems I work with, and to collaborate more effectively with engineering teams.",
    abilities: [
      {
        title: "Frontend",
        description: "React · UI Logic · Design Systems Awareness",
      },
      {
        title: "Backend",
        description: "Node · Python · APIs & Data Flows",
      },
    ],
    button: "View Projects",
  },
  {
    image: "researchImage.src",
    alt: "Laboratory Microscope",
    title: "Scientific Roots",
    subtitle: "Foundational Story",
    description:
      "Started in biology and plant physiology, learning to observe systems, validate data, and understand how small changes affect the whole.",
    abilities: [
      {
        title: "Inquiry",
      },
      {
        title: "Observation",
      },
      {
        title: "Analysis",
      },
    ],
  },
  {
    image: "dataImage.src",
    alt: "Data Visualization",
    title: "Data Dynamics",
    subtitle: "Analytical Lens",
    description:
      "Began transitioning into data work, applying scientific thinking to data validation, exploration, and understanding how information flows across systems.",
    abilities: [
      {
        title: "PostgreSQL",
      },
      {
        title: "R",
      },
      {
        title: "Python",
      },
    ],
  },
];
