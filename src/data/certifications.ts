export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialID?: string;
  credentialURL?: string;
  image?: string;
  skills?: string[];
};

const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
    credentialID: "ABC123456",
    credentialURL: "https://www.credly.com/badges/example",
    skills: ["Cloud Architecture", "AWS", "Infrastructure"]
  },
  {
    title: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    date: "Mar 2024",
    credentialID: "PSM-123456",
    credentialURL: "https://www.scrum.org/certificates/verify",
    skills: ["Agile", "Scrum", "Project Management"]
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google via Coursera",
    date: "Oct 2023",
    credentialURL: "https://www.coursera.org/account/accomplishments/example",
    skills: ["UI/UX Design", "Wireframing", "User Research"]
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "Dec 2023",
    credentialID: "LF-abcdef123456",
    credentialURL: "https://training.linuxfoundation.org/certification/verify/",
    skills: ["Kubernetes", "Container Orchestration", "DevOps"]
  }
];

export default certifications;
