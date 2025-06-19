import project1 from "../assets/VirtualR.png";
import project2 from "../assets/ChillFlix.png";
import project3 from "../assets/ShoeCart.png";
import project4 from "../assets/Gemini-logo.jpg";
import project5 from "../assets/weather.png";
import project6 from "../assets/todo.png";
import project7 from "../assets/BMI-calc.png";
import project8 from "../assets/Calculator.png";
import project9 from "../assets/e-cart.png";
import project10 from "../assets/Restaurant.png";
import project0 from "../assets/Socialmedia.png"
import project from "../assets/AutoShop.png"




export const HERO_CONTENT = `I'm a front-end developer with a strong foundation in HTML, CSS, JavaScript, and React.js. I love crafting engaging user interfaces and optimizing web performance. As a fresher, I am eager to learn, adapt, and contribute to innovative projects.`;

export const ABOUT_TEXT = `I am a passionate and versatile front-end developer with a strong foundation in building efficient and user-friendly web applications. My journey into web development began with a deep curiosity about how things work, which has since evolved into a career focused on continuous learning and adaptation.

I completed a six-month MEARN full-stack development course in July 2024, followed by self-training through online resources to refine my web development skills. Additionally, I gained hands-on experience as a Salesforce developer for six months, further expanding my technical expertise.

I thrive in collaborative environments, where I enjoy solving complex problems and crafting high-quality solutions that enhance user experiences. Beyond coding, I stay active and love exploring new technologies to keep up with the ever-evolving web development landscape.`;

export const CERTIFICATION = {
    duration: "Feb 2024 - July 2024",
    course: "( NACTET ) Mearn Full Stack Development",
    institute: "Luminar Technolab",


  }

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];


export const EXPERIENCE = [
  {
        year: "September 2024 - March 2025",
        role: "Salesforce Developer",
        company: "Auxspire Technologies",
        description: `Completed comprehensive Salesforce training covering fundamentals, Org setup, process automation, Apex development, Lightning Web Components, and hands-on experience with VS Code, testing, and debugging.`,
        
      },
      
    ];

// export const CONTACT = {
//   address: "767 Fifth Avenue, New York, NY 10153 ",
//   phoneNo: "+12 4555 666 00 ",
//   email: "me@example.com",
// };


export const PROJECTS = [
  {
    title: "Auto Shop - Freelance Ongoing",
    image: project,
    description:
      " – A freelance project for a premium car detailing brand, featuring a fully responsive design, smooth animations, and a dynamic video background.",
    technologies: ["React", "Javascript", "Framer-Motion", "TailwindCss"],
    live: <a href="https://xdautopro.vercel.app/">Live</a>,

  },
  {
    title: "Social Media (Full-Stack MERN)",
    image: project0,
    description:
      "A Pinterest-inspired full-stack application where users can create, save, and manage image-based posts with custom boards. Built with React, Express, MongoDB, and Zustand, featuring media uploads, comments, and dynamic user profiles." ,
    technologies: ["React.js","TailwindCSS", "MongoDB", "Node.js", "..."],
    github: <a href="https://github.com/arjxn2001/Social-Media.git">Git</a>

  },
  {
    title: "VirtualR",
    image: project1,
    description:
      "VirtualR is a responsive frontend web app for a VR development toolkit, featuring an interactive UI that showcases tools like drag-and-drop, real-time preview, and cross-platform compatibility.",
    technologies: [ "React", "TailwindCSS"],
        github: <a href="https://github.com/arjxn2001/VirtualR.git">Git</a>,
    live: <a href="https://virtual-r-teal.vercel.app/">Live</a>,

  },
  {
    title: "Movie-App",
    image: project2,
    description:
      "A responsive frontend movie app that displays trending and popular movies using dynamic UI components and clean layout, with search and adding to favourites features.",
    technologies: ["React", "Javascript", "CSS"],
    github: <a href="https://github.com/arjxn2001/movie-app.git">Git</a>,
    live: <a href="movie-d3ld6cric-arjun-kbs-projects.vercel.app">Live</a>,

  },
  {
    title: "Shoe-cart",
    image: project3,
    description:
      " From sleek UI to functional filters and category-based search, this project was all about enhancing the e-commerce experience ",
    technologies: ["React","HTML", "CSS", "Javascript"],
    github: <a href="https://github.com/arjxn2001/Shoe-cart.git">Git</a>,
    live: <a href="https://shoe-cart-lemon.vercel.app/">Live</a>,
  },
  {
    title: "Gemini Frontend Clone",
    image: project4,
    description:
      "Designed an intuitive and responsive user interface for an AI-powered Gemini app using modern frontend technologies.",
    technologies: ["React", "Tailwind Css", "Framer Motion",],
    github: <a href="https://github.com/arjxn2001/Gemini.git">Git</a>,
    live: <a href="https://gemini-nine-beige.vercel.app/">Live</a>,
  },
  {
    title: "Weather Forecast",
    image: project5,
    description:
      "The design includes modern layout techniques and visually appealing styles to display current weather information such as temperature, location, weather condition, and date.",
    technologies: ["HTML", "CSS", "JavaScript",],
    github: <a href="https://github.com/arjxn2001/weather_app.git">Git</a>,
    live: <a href="https://arjxn2001.github.io/weather_app/">Live</a>,
  },
  {
    title: "ToDo List",
    image: project6,
    description:
      "A dynamic and responsive To-Do List app built with React, featuring task addition, deletion, and real-time state updates.",
    technologies: ["React", "HTML","CSS", "JavaScript",],
    github: <a href="https://github.com/arjxn2001/Todo-.git">Git</a>,
    live: <a href="todo-n1jh6vgzw-arjun-kbs-projects.vercel.app">Live</a>,
  },
  {
    title: "BMI Calculator",
    image: project7,
    description:
      "A simple and interactive BMI Calculator built with React that computes and displays BMI based on user input for height and weight.",
    technologies: ["React", "JavaScript", ],
    github: <a href="https://github.com/arjxn2001/bmi_calc.git">Git</a>,
    live: <a href="bmi-calc-fcuyuqc3n-arjun-kbs-projects.vercel.app">Live</a>,
  },
  {
    title: "Calculator",
    image: project8,
    description:
      "A functional calculator built with React, allowing users to perform basic arithmetic operations with a clean and responsive UI.",
    technologies: ["React", "JavaScript", "CSS",],
    github: <a href="">Git</a>,
    live: <a href="">Live</a>,
  },
  {
    title: "E-Cart",
    image: project9,
    description:
      "A responsive e-cart shopping app built with React, featuring product listings, cart management, and a smooth user experience for browsing and purchasing items.",
    technologies: ["React", "HTML", "CSS",],
    github: <a href="https://e-cart-three-kappa.vercel.app/">Git</a>,
    live: <a href="https://github.com/arjxn2001/e-cart.git">Live</a>,
  },
  {
    title: "Restaurant Web",
    image: project10,
    description:
      "A visually appealing restaurant website built using HTML and CSS, showcasing menu items, location, and services with a clean and responsive layout.",
    technologies: ["HTML", "CSS",],
    github: <a href="https://github.com/arjxn2001/restaurant_html_css.git">Git</a>,
    live: <a href="https://arjxn2001.github.io/restaurant_html_css/">Live</a>,
  },
];

