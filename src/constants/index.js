import {
  upb,
  nitkkr,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,


  carrent,
  jobit,
  tripguide,
  threejs,
  flixhub,
  promptimg,
  homecrew,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Engineering",
    company_name: "National institute of Technology, Kurukshetra",
    icon: nitkkr,
    iconBg: "#e2e1e8",
    date: "Dec 2021 - July 2025",
    points: [
      "Curent CGPA : 9.0495",
      "C/C++, Java, Python, HTML, CSS, JavaScript",
      "Data structures and alogrihms, Operating System, Object oriented programming, Database management system",
      "Participated in Hackthons",

    ],
  },

  {
    title: "Intermediate Examination (Class XII)",
    company_name: "PIC Partawal, Maharajganj",
    icon: upb,
    iconBg: "#e2e1e8",
    date: "Apr 2018 - Mar 2020",
    points: [
      "Passed with 87.8%",

      "Honoured by District magistrate for achieving 3rd rank in district",

    ],
  },
  {
    title: "High School Examination",
    company_name: "KMIC Partawal, Maharajganj",
    icon: upb,
    iconBg: "#e2e1e8",
    date: "Apr 2017 - Mar 2018",
    points: [
      "Passed with 87% marks",
      "First rank in school",

    ],
  },
];



const projects = [
  {
    name: "HomeCrew",
    description:
      "A web app for college students to connect with peers from the same location or nearby places. The app shows peers based on the selected location by the current user. In-app chat functionality is implemented to enhance communication among users.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "purple-text-gradient",
      },
    ],
    image: homecrew,
    source_code_link: "https://github.com/sonu2164/handshake-connect-to-your-neighbor-in-college",
  },
  {
    name: "Flixhub",
    description:
      "A movie listing web app using the TMDB API to fetch movie data. Integrated Alan AI voice search functionality for intuitive movie search. Utilized Material UI for a modern and intuitive user interface.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tmdb",
        color: "pink-text-gradient",
      },
      {
        name: "alanai",
        color: "purple-text-gradient",
      },
      {
        name: "materialui",
        color: "orange-text-gradient",
      },
    ],
    image: flixhub, // Replace 'flixhub' with the actual image URL for your Flixhub project.
    source_code_link: "https://flixhub.netlify.app/", // Replace with the actual GitHub repository link for Flixhub.
  },
  {
    name: "PromptImg",
    description:
      "A web app using the OpenAI (DALL-E) API, enabling users to generate and download creative images based on a prompt. Users can post generated images to the community of app users.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "purple-text-gradient",
      },
      {
        name: "openai",
        color: "yellow-text-gradient",
      },
    ],
    image: promptimg,
    source_code_link: "https://github.com/sonu2164/imageGenius-Image-generation-application",
  },
];


export { services, technologies, experiences, projects };