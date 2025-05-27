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
  name:"joe doe",
  mail: "simobourhym01@gmail.com",
  title: "Hi, I’m Mohammed 👋",
  profile: "/images/me.jpeg",
  description:
    "Hey, i'm a *Software Engineer* with over *3 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
