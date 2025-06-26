export interface Language {
    name: string;
    iconName: string;
    className?: string;
  }
  
  export const languages: Record<string, Language> = {
   html: {
    name: "HTML 5",
    iconName: "html",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  react: {
    name: "React",
    iconName: "react",
  },
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  "spring boot": {
    name: "Spring Boot",
    iconName: "spring boot",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  "c++": {
    name: "C++",
    iconName: "c++",
  },
  java: {
    name: "Java",
    iconName: "java",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  mongo: {
    name: "MongoDB",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    iconName: "mysql",
  },
  redis: {
    name: "Redis",
    iconName: "redis",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  docker: {
    name: "Docker",
    iconName: "docker",
  },
  terraform: {
    name: "Terraform",
    iconName: "terraform",
  },
  "github actions": {
    name: "GitHub Actions",
    iconName: "github actions",
  },
  vagrant: {
    name: "Vagrant",
    iconName: "vagrant",
  },
  ansible: {
    name: "Ansible",
    iconName: "ansible",
  },
  aws: {
    name: "AWS",
    iconName: "aws",
  }
  };
  
  export const getLanguage = (lang: string): Language => {
    return languages[lang] || languages.html;
  }; 