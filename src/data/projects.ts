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
    link: "https://github.com/MaeWolff/create-nextjs-app-bash-script",
  },
  {
    title: "Dictionary App",
    description: "A sleek dictionary application with multiple language support",
    techs: ["Next.js", "react-query", "zod"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and customers",
    techs: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/user/ecommerce-dashboard",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather forecasting with location detection",
    techs: ["Vue.js", "OpenWeather API", "Leaflet"],
    link: "https://github.com/user/weather-app",
  },
  {
    title: "Recipe Finder",
    description: "Find recipes based on ingredients you have at home",
    techs: ["React Native", "Firebase", "Spoonacular API"],
    link: "https://github.com/user/recipe-finder",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management for teams with real-time updates",
    techs: ["Angular", "Firebase", "RxJS"],
    link: "https://github.com/user/task-manager",
  },
  {
    title: "Portfolio / Template",
    description: "Customizable portfolio template for developers and designers",
    techs: ["Astro", "TypeScript", "TailwindCSS"],
    link: "https://github.com/MaeWolff/astro-portfolio-template",
    isComingSoon: true,
  },
];

export default projects;
