export type Project = {
  title: string;
  techs: string[];
  link: string;
  description?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
  title: "CommandBuddy cloud-native GitOps projec",
  description: "A cloud-native GitOps project featuring an AI-powered terminal quiz app that helps developers memorize CLI commands interactively. Built with Spring Boot, MongoDB, React, and deployed on EKS using Terraform and GitHub Actions.",
  techs: ["Ansible","AWS","Terraform", "GitHub Actions", "EKS", "Docker","Spring Boot", "React", "TailwindCSS","Groq API", "MongoDB"],
  link: "https://github.com/MohammedBourhym/Cloud-native-gitops-project", 
},

  {
  title: "AWS Infrastructure as Code (IaC) Project",
  description: "A Terraform-based project that provisions AWS infrastructure and deploys a Dockerized Node.js application using GitHub Actions.",
  techs: ["Terraform", "AWS", "EC2", "Docker", "GitHub Actions", "Node.js", "VPC", "Security Groups"],
  link: "https://github.com/MohammedBourhym/aws_iac_project"  
}
  ,
  {
  title: "EduN7",
  description: "Retrieval-Augmented Generation (RAG) chatbot with document upload, Elasticsearch vector search, and Groq-powered AI responses, built with React and Spring Boot.",
  techs: ["React", "TailwindCSS", "Spring Boot", "Java", "LangChain4j", "Elasticsearch", "Docker", "Groq API"],
  link: "https://github.com/MohammedBourhym/EduN7_ChatBot" 
},
 {
  title: "CapLearn",
  description: "An interactive language learning platform using video subtitles from YouTube or local uploads, featuring word-level timestamps, vocabulary tracking, and Groq's Whisper API integration.",
  techs: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "Docker", "ffmpeg", "Groq API"],
  link: "https://github.com/MohammedBourhym/CapLearn" 
},
{
  title: "WinBackup Automation",
  description: "A bash-based backup and restore tool for Windows (especially WSL users), supporting directory compression, application export, restoration, and logging.",
  techs: ["Bash", "PowerShell", "Windows Subsystem for Linux", "Multi-threading", "winget"],
  link: "https://github.com/MohammedBourhym/WinBackupAutomation" // Replace with actual link
},
{
  title: "Digital Banking App",
  description: "A full-stack digital banking system using Spring Boot and Angular 19 with JWT security, role-based access, reactive state management, and a Tailwind-powered modern UI.",
  techs: ["Spring Boot", "Angular 19", "JWT", "Tailwind CSS", "RxJS", "MySQL", "Spring Security", "Hibernate", "Swagger", "TypeScript"],
  link: "https://github.com/yourusername/Digital_Banking_App" // Replace with actual link
},
{
  title: "Angular Productivity Application",
  description: "A full-stack employee productivity system with role-based access, calendar/event management, document handling, and metrics dashboards using Angular and Express.",
  techs: ["Angular", "TypeScript", "PrimeNG", "Express.js", "JWT", "Supabase", "Docker", "Multer", "Chart.js", "FullCalendar"],
  link: "https://github.com/MohammedBourhym/Angular_Productivity_Application" // Replace with actual link
},
{
  title: "Keeper App",
  description: "A Google Keep clone built with React and Express that supports note creation, labeling, pinning, archiving, and dark mode.",
  techs: ["React", "Express.js", "MongoDB", "Mongoose", "React Router", "Context API", "CSS"],
  link: "https://github.com/MohammedBourhym/Keeper_App" // Replace with actual link
},
{
  title: "WinBackup Automation",
  description: "A bash-based backup and restore tool for Windows (especially WSL users), supporting directory compression, application export, restoration, and logging.",
  techs: ["Bash", "PowerShell", "Windows Subsystem for Linux", "Multi-threading", "winget"],
  link: "https://github.com/MohammedBourhym/WinBackupAutomation" 
},
{
  title: "Angular Productivity Application",
  description: "A full-stack employee productivity system with role-based access, calendar/event management, document handling, and metrics dashboards using Angular and Express.",
  techs: ["Angular", "TypeScript", "PrimeNG", "Express.js", "JWT", "Supabase", "Docker", "Multer", "Chart.js", "FullCalendar"],
  link: "https://github.com/MohammedBourhym/Angular_Productivity_Application" 
}



];

export default projects;
