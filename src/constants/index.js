import {
  engineer,
  frontend,
  backend,
  game,
  openai,
  logo,
  Onia,
  Toad,
  fullstack,
  javascript,
  typescript,
  react,
  redux,
  nodejs,
  postgresql,
  firebase,
  materialui,
  css3,
  html5,
  tailwindcss,
  git,
  github,
  ChatOnia,
  DinGo,
  ToadsGarden,
  Kara,
  Sarah,
  Marcela,
  Lindsay,
  Madeleine,
  Yama,
  cpcc,
  tooth,
  uncc,
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
    title: "ChatOnia",
    company_name:
      "A software application that emulates the functionality of the ChatGPT model, using natural language processing and machine learning techniques to generate human-like responses to user input.",
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
    title: "DinGO -- for Dinner on the Go",
    company_name:
      "A custom single-page application eCommerce website with both user and administrative features.",
    icon: logo,
    iconBg: "#ffffff",
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
    title: "Toad's Garden",
    company_name:
      "A wholesome 2D side-scrolling platformer game starring familiar characters.  Players play as Toad and collect objectives while avoiding wildlife.",
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
      "Utilized JavaScript  to create dynamic user interfaces, manipulate the DOM, and implement various front-end frameworks and libraries such as React, Redux Toolkit, and jQuery.",
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
    source_link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
  },
  {
    name: "TypeScript",
    icon: typescript,
    source_link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: react,
    source_link: "https://reactjs.org/",
  },
  {
    name: "Redux",
    icon: redux,
    source_link: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: nodejs,
    source_link: "https://nodejs.org/",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    source_link: "https://www.postgresql.org/",
  },
  {
    name: "Firebase",
    icon: firebase,
    source_link: "https://firebase.google.com/",
  },
  {
    name: "Material UI",
    icon: materialui,
    source_link: "https://mui.com/",
  },
  {
    name: "CSS 3",
    icon: css3,
    source_link: "https://www.w3schools.com/css/",
  },
  {
    name: "HTML 5",
    icon: html5,
    source_link: "https://www.w3.org/html/",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
    source_link: "https://tailwindcss.com/",
  },
  {
    name: "Git",
    icon: git,
    source_link: "https://git-scm.com/",
  },
];

export const projects = [
  {
    name: "ChatOnia",
    description:
      "A software application that emulates the functionality of the ChatGPT model, using natural language processing and machine learning techniques to generate human-like responses to user input.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js 13",
        color: "blue-text-gradient",
      },
      {
        name: "NextAuth.js",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI APIs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: ChatOnia,
    source_code_link: "https://github.com/CatherineJOnia/ChatOnia",
  },
  {
    name: "DinGo",
    description:
      "A custom single-page application eCommerce website with both user and administrative features.",
    tags: [
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Sequelize",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "RESTful APIs",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "CSS 3",
        color: "pink-text-gradient",
      },
      {
        name: "HTML 5",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
      {
        name: "Webpack",
        color: "pink-text-gradient",
      },
    ],
    image: DinGo,
    source_code_link: "https://github.com/CatherineJOnia/DinGo",
  },
  {
    name: "Toad's Garden",
    description:
      "A wholesome 2D side-scrolling platformer game starring familiar characters.  Players play as Toad and collect objectives while avoiding wildlife.",
    tags: [
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Phaser 3",
        color: "green-text-gradient",
      },
      {
        name: "Tiled Map Editor",
        color: "green-text-gradient",
      },
      {
        name: "Webpack",
        color: "green-text-gradient",
      },
      {
        name: "Git Version Control",
        color: "green-text-gradient",
      },
    ],
    image: ToadsGarden,
    source_code_link: "https://github.com/toads-garden/toads-garden-web",
  },
];

export const testimonials = [
  {
    testimonial:
      "Catherine has a natural affinity for all things tech, and has been able to pick up new and challenging concepts much more quickly than average. Most importantly, she is a great friend and teammate to those she works with, and is tenacious, thoughtful, and modest when overcoming obstacles.",
    name: "Kara Cavanaugh",
    designation: "Instructor",
    company: "FSA Grace Hopper Program",
    image: Kara,
  },
  {
    testimonial:
      "Catherine never backed down from any challenges she faced while building complex projects. She is a gifted developer and is an asset to any team.",
    name: "Sarah Lozier",
    designation: "Mentor",
    company: "FSA Grace Hopper Program",
    image: Sarah,
  },
  {
    testimonial:
      "Catherine always communicated her thought-process clearly with the team, and her attention to detail helped elevate the project's user experience and interface. She also excelled in time management and ensuring we were targeting all the project's milestones.",
    name: "Marcela Alonso",
    designation: "Capstone Teammate",
    company: "FSA Grace Hopper Program",
    image: Marcela,
  },
  {
    testimonial:
      "Catherine was wonderful to work with as she was consistently willing to collaborate and review code in order to find the best solution to every problem.",
    name: "Lindsay Powell",
    designation: "Capstone Teammate",
    company: "FSA Grace Hopper Program",
    image: Lindsay,
  },
  {
    testimonial:
      "Catherine and I were in the same Grace Hopper cohort, and I would recommend her unreservedly for open dev roles or anyone looking for someone to collaborate with. Throughout the program, it was clear that in addition to her natural tech acumen, Cat was an incredibly hard worker and dedicated student with a real passion for learning new things and a willingness to take on whatever tasks are necessary to help the group.",
    name: "Madeleine Lloyd-Davies",
    designation: "Cohort Peer",
    company: "FSA Grace Hopper Program",
    image: Madeleine,
  },
];

export const backgrounds = [
  {
    title: "Server",
    company_name: "Yama",
    icon: Yama,
    iconBg: "#000000",
    date: "February 2019 - February 2023",
    points: [
      "Served 10-20 tables nightly in a fast-paced environment and effectively managed time to ensure an optimal experience for each guest.",
      "Generated over $350,000 in annual revenue for the company.",
      "Trained and mentored 100% of new employees on company culture, company policies, and customer service standards",
      "Navigated high-pressure situations -- such as rush hour, special events, and customer conflicts -- with ease and composure, ensuring smooth service delivery and customer satisfaction.",
    ],
  },
  {
    title: "Dental Hygiene Intern",
    company_name: "CPCC Dental Hygiene Clinic",
    icon: cpcc,
    iconBg: "#ffffff",
    date: "January 2019 - June 2021",
    points: [
      "Responsible for sourcing all patients.",
      "Performed 4-6 patient procedures per week including cleanings, x-rays, sealands and debridements.",
      "Developed and implemented individualized dental care plans for a diverse set of patients -- peridontal maintenance, pediatric, elderly, non English speaking, blind, etc.",
      "Improved patient gingival inflammation and plaque removal by 20-40% by counseling patients on the state of their oral health and educating them on best practices for maintenance at home.",
      "Maintained a 100% patient satisfaction score on patient education and satisfactions surveys.",
    ],
  },
  {
    title: "Dental Assistant",
    company_name: "Lincoln-Devon Dental",
    icon: tooth,
    iconBg: "#ffffff",
    date: "July 2017 - January 2019",
    points: [
      "Boosted efficiency of patient procedures by 30%, increasing daily appointment availability from 6 to 10 as the first and only dental assistant in the office.",
      "Modernized the record-keeping system by inputting 100% of the office's paper patient records and notes on a new digitized platform.",
      "Spearheaded appointment reminder program, sending automated appointment reminders ahead of visits that reduced instance of no-shows by 85%.",
      "Organized efficient stockroom system, cutting annual costs by $20,000 in a small single-dentist office.",
    ],
  },
  {
    title: "Bachelor's of Biological Sciences",
    company_name: "University of North Carolina at Charlotte",
    icon: uncc,
    iconBg: "#005826",
    date: "August 2013 - May 2017",
    points: [
      "Awarded 4-year full-ride merit scholarship based on a competitive application and interview process of over 20,000 applicants.",
      "Graduated with Honors in Biological Sciences after defending academic thesis.",
      "Graduated Cum Laude based on academic performance.",
      "Participated in Club Tennis after graduating high school with four years of Varsity experience.",
      "Co-founded Filipino-American Student Union, promoting the organization from 3 founding members to over 120 active members.",
    ],
  },
];
