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
    title: "AWS Academy Learner Lab",
    issuer: "Amazon Web Services (In progress)",
    date: "Soon",
  skills: ["AWS Management Console", "EC2 (Elastic Compute Cloud)", "S3 (Simple Storage Service)", "IAM (Identity and Access Management)", "VPC (Virtual Private Cloud)", "CloudFormation", "CloudWatch", "AWS CLI"]

  },
  {
    title: "DevOps Beginners to Advanced with Projects",
    issuer: "UDEMY (In progress)",
    date: "Soon",
    skills: ["Linux & Shell Scripting", "Git & GitHub", "CI/CD Pipelines", "Jenkins", "Docker", "Kubernetes", "Ansible", "AWS Basics","IaC"]

  },
  {
    title: "Red Hat System Administration II",
    issuer: "Red Hat",
    date: "Apr 2025",
    credentialURL: "https://www.credly.com/badges/c7d7d3f9-1b30-441b-93df-5f39587651c5/public_url",
    skills: ["Ansible","Linux", "Red Hat", "Red Hat Academy","Red Hat Certified System Administrator","Red Hat Enterprise Linux","RHCSA"]
  },
  {
    title: "Red Hat System Administration I",
    issuer: "Red Hat",
    date: "Mar 2025",
   
    credentialURL: "https://www.credly.com/badges/d16fd49f-d7da-4234-829c-9ba2e7286771/public_url",
    skills: ["Linux", "Red Hat", "Red Hat Academy","Red Hat Certified System Administrator","Red Hat Enterprise Linux","RHCSA"]
  },
    {
    title: "Python for Data Science and AI",
    issuer: "Coursera (IBM)",
    date: "Feb 2025",
   
    credentialURL: "https://www.credly.com/badges/d16fd49f-d7da-4234-829c-9ba2e7286771/public_url",
    skills: ["Bokeh", "Matplotlib", "Python","PWID-B0394900"]
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer:  "CISCO",
    date: "Mar 2025",
   
    credentialURL: "https://www.netacad.com/fr/certificates?issuanceId=1f92cbd8-f1ce-489a-bd95-f5b595359f03",
    skills: ["IP Addressing & Subnetting", "VLANs & Switching", "Routing Fundamentals", "Wireless Networking Basics"]

  },


 {
    title: "Networking Essentials",
    issuer:  "CISCO",
    date: "Jan 2024",
   
    credentialURL: "https://www.credly.com/badges/d16fd49f-d7da-4234-829c-9ba2e7286771/public_url",
    skills:  ["Networking Fundamentals", "IP Addressing", "Basic Router & Switch Configuration", "Network Security Basics", "Troubleshooting & Connectivity Tools"]
  },

 {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer:  "UDEMY",
    date: "Aug 2024",
   
    credentialURL: "https://www.udemy.com/certificate/UC-d4950658-bd40-4e77-ae81-3bd26f34fa77/",
   skills: ["HTML, CSS, JavaScript", "React.js", "Node.js & Express.js", "MongoDB", "RESTful APIs", "Git & GitHub", "Authentication & Security"]
  },
   {
    title: "Angular - The Complete Guide (2025 Edition)",
    issuer:  "UDEMY (In progress)",
    date: "soon",
    skills: ["Angular"]
  } 


];

export default certifications;
