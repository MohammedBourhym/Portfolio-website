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