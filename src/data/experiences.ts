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
      role: "Web Developer Intern",
      company: "Foliatech",
      companyLink: "https://foliatech.com",
      location: "Paris, France",
      date: "Jul 2024 - Aug 2024",
      period: "1 mo",
      description:
        "Developed a full-stack Angular application for business administrators to manage employee data, track work activities, and enhance productivity. Implemented features including employee profile management, activity monitoring, and role-based access control. Built a secure backend with Node.js and Supabase, utilizing JWT authentication and protected API routes, integrated with the Angular frontend via RESTful APIs.",
  techStack: ["Angular", "Node.js", "Supabase", "JWT", "RESTful APIs"]
    }
  ];
  

export default experiences;