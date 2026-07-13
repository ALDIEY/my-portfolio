export const STAGES = [
  { id: "build", label: "BUILD", title: "Compétences" },
  { id: "test", label: "TEST", title: "Projets" },
  { id: "deploy", label: "DEPLOY", title: "Expérience" },
  { id: "monitor", label: "MONITOR", title: "Formation" },
  { id: "release", label: "RELEASE", title: "Contact" },
];

export const SKILL_LAYERS = [
  {
    name: "Frontend",
    tag: "web",
    items: ["React", "Angular", "Tailwind CSS", "JavaScript / TypeScript"],
  },
  {
    name: "Backend",
    tag: "api",
    items: ["Spring Boot", "Laravel", "REST / API design"],
  },
  {
    name: "Mobile",
    tag: "mobile",
    items: ["React Native", "Flutter", "Notifications push"],
  },
  {
    name: "DevOps",
    tag: "infra",
    items: ["Docker", "Jenkins", "Git / CI-CD", "Pipelines automatisés"],
  },
];

export const PROJECTS = [
  {
    id: "P-01",
    name: "Application mobile — lba-mobile",
    status: "passed",
    description:
      "Application React Native pour le suivi et la gestion d'activités, incluant la mise en place des notifications push et la structuration des branches Git en équipe.",
    stack: ["React Native", "Git", "CI/CD"],
  },
  {
    id: "P-02",
    name: "Plateforme de paiement mobile",
    status: "passed",
    description:
      "Développement de fonctionnalités pour une solution de paiement mobile, avec intégration d'API et attention particulière à la fiabilité des transactions.",
    stack: ["React", "Spring Boot", "API REST"],
  },
  {
    id: "P-03",
    name: "Formation CI/CD — Jenkins",
    status: "passed",
    description:
      "Conception d'un parcours de formation de 2 jours (Master Bac+5) sur Jenkins : support de cours, guide formateur minute par minute, variante Windows.",
    stack: ["Jenkins", "Docker", "Pédagogie"],
  },
];

export const ENVIRONMENTS = [
  { name: "Orange-Sonatel SA", type: "production", note: "Développement full stack" },
  { name: "Afribapay", type: "production", note: "Solutions de paiement mobile" },
  { name: "Expresso Sénégal", type: "production", note: "Développement logiciel" },
  { name: "A3M Holding", type: "production", note: "Full stack & mobile" },
  { name: "TECTRA SENEGAL", type: "production", note: "Ingénierie logicielle" },
  { name: "L3M Holding", type: "staging", note: "React Native" },
];

export const TRAININGS = [
  {
    name: "CI/CD avec Jenkins",
    level: "Master Bac+5",
    detail: "Formation 2 jours, 70% pratique — pipelines, Docker, intégration continue.",
  },
  {
    name: "Développement mobile",
    level: "Institut privé",
    detail: "React Native & Flutter — de la prise en main aux notifications push.",
  },
];
