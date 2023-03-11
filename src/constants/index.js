import {
  engineer,
  frontend,
  backend,
  game,
  openai,
  logo,
  Toad,
  fullstack,
  javascript,
  typescript,
  react,
  redux,
  // nextjs,
  // expressjs,
  nodejs,
  postgresql,
  // sequelize,
  firebase,
  // nextauthjs,
  // webpack,
  materialui,
  css3,
  html5,
  tailwindcss,
  // sass,
  // threejs,
  // npm,
  // vscode,
  git,
  // github,
  // slack,
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

export const services = [
  {
    title: "Full Stack Software Engineer",
    icon: engineer,
  },
  {
    title: "React Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Indie Game Developer",
    icon: game,
  },
];

export const experiences = [
  {
    title: "Solo Developer",
    company_name: "ChatOnia",
    icon: openai,
    iconBg: "#11a37f",
    date: "March 2023",
    points: [
      "Integrated NextAuth.js's built-in authentication flows to handle the Google authentication process and ensure secure and reliable user authentication.",
      "Utilized dynamic routing with Next.js 13 to enable seamless navigation and optimize the user experience.",
      "Employed Firebase Firestore to enable real-time chat history functionality.",
      "Harnessed OpenAI APIs to generate automated and intelligent interactions with users.",
    ],
  },
  {
    title: "Solo eCommerce Developer",
    company_name: "DinGo -- for Dinner on the Go",
    icon: logo,
    iconBg: "#231f20",
    date: "March 2023",
    points: [
      "Designed and developed a full-stack web application using four database models: user, product, cart, and order.",
      "Streamlined the user experience with an intuitive checkout process using React Redux Toolkit to predictably manage state.",
      "Implemented responsive design principles using Material UI's grid system to ensure the application is optimized for various screen sizes and devices.",
      "Incorporated local storage to enable state cart persistence regardless of guest login status.",
      "Optimized application performace by configuring RESTful APIs that deliver efficient features such as JWT login authentication, site administration, modifiable shopping cart, featured product carousel, and pagination.",
    ],
  },
  {
    title: "Primay Game Developer",
    company_name: "Toad's Garden",
    icon: Toad,
    iconBg: "#374828",
    date: "February 2023",
    points: [
      "Implemented a 2D physics engine utilizing kinematics and collision response.",
      "Employed modular principles for componentized assets, allowing for reusable and extensible code.",
      "Researched and interpreted documentation written in unfamiliar languages and translated code into JavaScript.",
      "Collaborated with other developers to ensure timely and high-quality delivery of the application, utilizing agile development methodologies and best practices.",
      "Managed code changes using Git's branching and merging functionality, enabling multiple developers to work on different features or bug fixes simultaneously without conflicts.",
    ],
  },
  {
    title: "Software Engineer Fellow",
    company_name: "Fullstack Academy of Code",
    icon: fullstack,
    iconBg: "#ffffff",
    date: "October 2022 -  February 2023",
    points: [
      "Completed the Fullstack Academy of Code's intensive 17-week immersive program for women, gaining an in-depth knowledge of the PERN stack, Git version control, and JavaScript programming language.",
      "Utilized JavaScript  to create dynamic user interfaces, manipulate the DOM, and implement various front-end frameworks and libraries such as React.js, Redux Toolkit, and jQuery.",
      "Completed projects that included back-end development using Node.js and Express.js, integrating with PostgreSQl databases to build scalable, efficient, and secure web applications.",
      "Worked on projects that included testing, debugging, and optimizing code to improve application performance and user experience.",
      "Collaborated with other team members, students, mentors, and instructors using Slack as a primary communication tool to facilitate effective communication and improve productivity.",
      "Utilized Git and GitHub to manage version control and collaborate with other developers on team projects, demonstrating proficiency in managing code changes, branching and merging, and code reviews.",
    ],
  },
];

export const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Redux",
    icon: redux,
  },
  // {
  //   name: "Next.js",
  //   icon: nextjs,
  // },
  // {
  //   name: "Express.js",
  //   icon: expressjs,
  // },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  // {
  //   name: "Sequelize",
  //   icon: sequelize,
  // },
  {
    name: "Firebase",
    icon: firebase,
  },
  // {
  //   name: "NextAuth.js",
  //   icon: nextauthjs,
  // },
  // {
  //   name: "Webpack",
  //   icon: webpack,
  // },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "CSS 3",
    icon: css3,
  },
  {
    name: "HTML 5",
    icon: html5,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },
  // {
  //   name: "Sass",
  //   icon: sass,
  // },
  // {
  //   name: "Three.js",
  //   icon: threejs,
  // },
  // {
  //   name: "npm",
  //   icon: npm,
  // },
  // {
  //   name: "VS Code",
  //   icon: vscode,
  // },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "GitHub",
  //   icon: github,
  // },
  // {
  //   name: "Slack",
  //   icon: slack,
  // },
];
