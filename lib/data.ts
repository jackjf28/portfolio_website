export const links = [
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Skills",
    hash: "#skills"
  }

] as const;

export const experienceData = [
  {
    id: 0,
    title: "Senior Software Engineer",
    company: "Thomson Reuters",
    description: "Designed and developed services to mitigate unused license cost in Azure DevOps. Also collaborated with other teams to deploy a service that gathers sentiment on GitHub Copilot usage across our company's tenant.",
    dateStart: "2024",
    dateEnd: "Present",
    skillsUsed: [
      "C#",
      "Git",
      "Azure",
      "Node.js",
      "Probot",
      "GitHub Apps"
    ]
  },
  {
    id: 1,
    title: "Software Engineer",
    company: "Thomson Reuters",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    dateStart: "2020",
    dateEnd: "2024",
    skillsUsed: [
      "C#",
      "Git",
      "Azure",
    ]
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "React",
  "Next.js",
  "Node.js",
  "Framer Motion",
  "C#",
  "Git",
  "Azure",

] as const;
