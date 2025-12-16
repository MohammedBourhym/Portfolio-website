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
  name:"Mohammed Bourhym",
  mail: "simobourhym01@gmail.com",
  title: "Mohammed Bourhym | Software Engineer",
  profile: "/images/me.png",
  description:
    "Software engineering student passionate about DevOps and web development. Mohammed Bourhym specializes in modern web technologies and cloud infrastructure. Available for collaboration.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/MohammedBourhym", // Replace with your actual GitHub username
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/mohammed-bourhym-733b91274/", // Replace with your actual LinkedIn username
    },
  ],
};

export default presentation;
