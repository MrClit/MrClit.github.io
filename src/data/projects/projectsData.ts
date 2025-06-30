import { Project } from './types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Qlik Sense and Veeva Vault Integration",
    description: "Automated integration between Qlik Sense and Veeva Vault using Node.js backend, web frontend, and JSON logs for traceability and monitoring.",
    image: "/Otsuka.png",
    url: "#",
    // tags: ["Node.js", "JavaScript", "HTML", "CSS"],
    tags: [
      { icon: "SiNodedotjs", lib: "si", label: "Node.js" },
      { icon: "SiJavascript", lib: "si", label: "JavaScript" },
      { icon: "SiCss3", lib: "si", label: "CSS" },
      // ...
],
  },
  {
    id: 2,
    title: "Coming soon...",
    description: "This project is under development and will be available soon.",
    image: "/coming-soon.jpg",
    url: "#",
    tags: [],
  },
];
