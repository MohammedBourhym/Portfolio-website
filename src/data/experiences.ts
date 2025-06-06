export interface Experience {
    role: string;
    company: string;
    companyLink?: string;
    location?: string;
    date: string;
    period: string;
    description: string;
    techStack: string[];
  }
  
const experiences: Experience[] = [
    {
      role: "Senior Software Engineer",
      company: "QuantumTech Labs",
      companyLink: "https://quantumtechlabs.com",
      location: "Remote",
      date: "Oct 2021 - Present",
      period: "2+ yrs",
      description:
        "At QuantumTech Labs, I lead the development of cutting-edge cloud-based applications, focusing on optimizing performance and scalability. My role involves collaborating closely with cross-functional teams to implement microservices architectures that streamline deployment processes. I also mentor junior developers, providing guidance on best practices and code optimization.",
      techStack: [
        "Node.js",
        "AWS",
        "Microservices",
        "Docker",
        "Kubernetes",
        "GraphQL",
        "TypeScript",
        "Python",
        "CI/CD",
        "MongoDB",
      ],
    },
    {
      role: "Web Developer",
      company: "CreativeSoft",
      companyLink: "https://creativesoft.dev",
      location: "Paris, France",
      date: "Jan 2020 - Sep 2021",
      period: "1 yr 9 mos",
      description:
        "Worked on developing responsive web interfaces using React and Tailwind CSS. Improved page performance and collaborated with designers to build pixel-perfect UI/UX for various client projects.",
      techStack: ["React", "Tailwind CSS", "TypeScript", "Next.js", "Figma"],
    },
    {
      role: "Backend Intern",
      company: "InnoCore Systems",
      companyLink: "https://innocore.io",
      location: "Casablanca, Morocco",
      date: "Jun 2019 - Dec 2019",
      period: "6 mos",
      description:
        "Built REST APIs with Express.js and PostgreSQL. Gained hands-on experience with Docker and CI pipelines. Helped refactor old codebases for maintainability.",
      techStack: ["Node.js", "Express.js", "PostgreSQL", "Docker", "GitLab CI"],
    }
  ];
  

export default experiences;