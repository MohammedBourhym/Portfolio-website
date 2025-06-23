export type Project = {
  title: string;
  techs: string[];
  link: string;
  description?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Puppetfactory",
    description: "A platform for creating and managing automated puppet shows with AI integration",
    techs: ["Next.js", "TypeScript", "TailwindCSS", "AI"],
    link: "https://puppetfactory.app/",
  },
  {
    title: "Script to generate Next.js project",
    description: "Bash script to quickly scaffold Next.js projects with sensible defaults",
    techs: ["Shell", "JavaScript"],
    link: "https://github.com/MoBourhym/create-nextjs-app-bash-script",
  },
  {
    title: "Dictionary App",
    description: "A sleek dictionary application with multiple language support",
    techs: ["Next.js", "react-query", "zod"],
    link: "https://github.com/MoBourhym/dictionary-app",
  }
];

export default projects;
