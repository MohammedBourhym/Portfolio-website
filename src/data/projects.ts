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
    link: "https://github.com/yourusername/create-nextjs-app-bash-script",
  },
  {
    title: "Dictionary App",
    description: "A sleek dictionary application with multiple language support",
    techs: ["Next.js", "react-query", "zod"],
    link: "https://github.com/yourusername/dictionary-app",
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and customers",
    techs: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/yourusername/ecommerce-dashboard",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather forecasting with location detection",
    techs: ["Vue.js", "OpenWeather API", "Leaflet"],
    link: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Recipe Finder",
    description: "Find recipes based on ingredients you have at home",
    techs: ["React Native", "Firebase", "Spoonacular API"],
    link: "https://github.com/yourusername/recipe-finder",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management for teams with real-time updates",
    techs: ["Angular", "Firebase", "RxJS"],
    link: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio website built with Astro",
    techs: ["Astro", "TypeScript", "TailwindCSS"],
    link: "https://github.com/yourusername/portfolio",
  },
];

export default projects;
