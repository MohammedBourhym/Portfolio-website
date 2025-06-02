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
  name:"BOURHYM",
  mail: "simobourhym01@gmail.com",
  title: "Hi, I'm BOURHYM 👋",
  profile: "/images/me.jpeg",
  description:
    "Hey, i'm a *Software Engineer* with over *3 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I love learning new technologies and building useful applications.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/yourusername", // Replace with your actual Twitter username
    },
    {
      label: "Github",
      link: "https://github.com/yourusername", // Replace with your actual GitHub username
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourusername", // Replace with your actual LinkedIn username
    },
  ],
};

export default presentation;
