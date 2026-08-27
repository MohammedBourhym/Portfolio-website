export interface Experience {
  role: string;
  company: string;
  companyLink?: string;
  location?: string;
  date: string;
  period: string;
  description: string;
  link: string;
  techStack: string[];
}

const experiences: Experience[] = [{
  role: "AI Software Engineer - PFE Internship",
  company: "Theodo",
  companyLink: "https://www.theodo.fr",
  location: "Casablanca, Morocco",
  date: "Feb 2026 - Aug 2026",
  period: "6 mo",
  description:
    "Developed an AI-powered compliance agent that automatically audits mobile applications against Apple App Store and Google Play policies. Built a deterministic evaluation framework with promptfoo to validate LLM outputs, automated quality gates through a custom GitHub Action integrated into CI/CD, and leveraged Python automation to keep compliance guidelines extensible and up to date.",
  link: "https://github.com/MohammedBourhym",
  techStack: ["Python", "LLM", "Promptfoo", "GitHub Actions", "CI/CD", "TypeScript", "Automation"]
},
{
  role: "Full-stack Software Engineer - PFE Internship",
  company: "Theodo",
  companyLink: "https://www.theodo.fr",
  location: "Casablanca, Morocco",
  date: "Feb 2026 - Aug 2026",
  period: "6 mo",
  description:
    "Contributed to a Next.js/React e-commerce application and its Spring Boot backend. Implemented the authentication system with persistent sessions, JWT token refresh, Zod runtime validation, and Jest/RTL test coverage. Delivered backend features following Hexagonal Architecture and Domain-Driven Design, with Liquibase database migrations, Docker Compose local environments, and JUnit/Testcontainers integration tests, enforced by strict quality gates (ArchUnit, JaCoCo, PIT mutation testing).",
  link: "https://github.com/MohammedBourhym",
  techStack: ["Next.js", "React", "TypeScript", "Spring Boot", "Hexagonal Architecture", "DDD", "Liquibase", "Docker Compose", "Zod", "JWT", "Jest", "JUnit", "Testcontainers", "ArchUnit"]
},
{
  role: "Cloud Software Engineer",
  company: " IT Access",
  companyLink: "https://www.itaccess.ma/",
  location: "Tangier, Morocco",
  date: "Jul 2025 - Sep 2025",
  period: "2 mo",
  description:
    "During my internship at IT Access, I designed and developed a cloud-based, distributed maintenance ticket management system using a GitOps approach, automated CI/CD pipelines, and Infrastructure as Code (Terraform) to ensure scalability, reliability, and zero-downtime deployments.",
  link: "https://github.com/MohammedBourhym/it-support-ticketing",
  techStack: ["Angular", "Tailwind", "Spring Boot", "Github Actions", "Docker", "JWT", "CI/CD", "Terraform", "EKS", "AWS"]
},
{
  role: "Full-stack Developer",
  company: "Foliatech",
  companyLink: "https://foliatech.fr",
  location: "Tangier, Morocco",
  date: "Jul 2024 - Aug 2024",
  period: "1 mo",
  description:
    "Developed a full-stack Angular application for business administrators to manage employee data, track work activities, and enhance productivity. Implemented features including employee profile management, activity monitoring, and role-based access control. Built a secure backend with Node.js and Supabase, utilizing JWT authentication and protected API routes, integrated with the Angular frontend via RESTful APIs.",
  link: "https://github.com/MohammedBourhym/Employee-Management",
  techStack: ["Angular", "Node.js", "Supabase", "JWT", "RESTful APIs"]
}
];


export default experiences;