import {
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
  thumbnail,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Cloud Devloper",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "GDSC Member",
    company_name: "Google",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2023 - present",
    points: [
      "Being the member of GDSC 'BMSIT' participated in various events such as cloud study jam and came top 10 in that.",
      "Helped in designing aspects of GDSC logo for the 'GDSC-BMSIT' community.",
      "Helped in the overall growth of the club even just being the member.",
      "Participating in code reviews and providing constructive feedback to other developers working in this community.",
    ],
  },
  {
    title: "Devops Intern",
    company_name: "Viatris",
    icon: shopify,
    iconBg: "#DDDDDD",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Learnt the basics of devops and steps to implement devops process that is devops life-cycle",
      "Learnt with teams including cloud/devops developers to create good projects.",
      "Created cloud based projects using AWS during the internship time period.",
      "Got to knew about the working environment about the company.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tic-Tac-Toe",
    description:
      "A traditional/typical game of X's and O's which is either played against cpu or against other player where player wins if he/she get's all of his/her turns column-wise/rows-wise/digaonal-wise or else it results in a draw comes with leaderboards too.",
    tags: [
      {
        name: "html,css,js",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "tailwind,bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ashish4kmax/TicTacToe-game.github.io",
  },
  {
    name: "Clev-Calc",
    description:
      "Web application that enables users to do scientific calculations and all other types of calculations like cgpa, health realted like BMI, finance realted profit, loss and finding interest uses splic for creating 3D UI.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "html,css,js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap, tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ashish4kmax/Clev-Calc",
  },
  {
    name: "Snake-Game",
    description:
      "A traditional 'SNAKE-GAME' maade into a mordernised version of it and this could be played not just in mobile but in dekstops and laptops too and it comes up with the feature of leaderboard for ranking.",
    tags: [
      {
        name: "html,css,js",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "animate css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ashish4kmax/SnakeGame",
  },
  {
    name: "Life-Under-Water",
    description:
      "Life Under Water is basically is a bootstrap-tailwind based website used to create awarness among poeple about the sdg that is sustainable devlopment growth and one of it's important goal's which is this topic that is to create awarness about the marine life and how to protect them.",
    tags: [
      {
        name: "html,css,js",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss,jquery",
        color: "pink-text-gradient",
      },
    ],
    image: thumbnail,
    source_code_link: "https://github.com/ashish4kmax/LifeOnWater.github.io",
  },
];

export { services, technologies, experiences, testimonials, projects };
