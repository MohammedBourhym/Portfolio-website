type Social = {
  label: string;
  link: string;
};

type Presentation = {
  avatar:string,
  name:string,
  role:string,
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  avatar:"/images/me2.jpeg",
  role:"Software Engineer",
  name:"Mohammed BOURHYM",
  mail: "simobourhym01@gmail.com",
  title: "Hi, I'm Mohammed BOURHYM 👋",
  profile: "/images/me.jpeg",
  description:
    "Motivated software engineering student with a strong curiosity for the IT field, currently seeking a summer internship to apply, expand, and refine my skills in DevOps and software engineering. Eager to contribute to real-world projects while continuing to grow as a developer and IT enthusiast.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/MoBourhym", // Replace with your actual GitHub username
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/mohammed-bourhym-733b91274/", // Replace with your actual LinkedIn username
    },
  ],
};

export default presentation;
