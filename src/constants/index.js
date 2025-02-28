import tactgen from "../assets/company/tactgen.png";
import code from "../assets/company/code.png";
import mernEcommerce from "../assets/mernEcommerce.jpg";
import aspEcommerce from "../assets/aspEcommerce.jpg";


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
      title: "React Native Developer",
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
      title: "Frontend Developer Intern",
      company_name: "Tactgen",
      icon: tactgen,
      iconBg: "#383E56",
      date: "Aug 2024 - Nov 2024",
      points: [
        "Developing and maintaining web applications using HTML, CSS, JavaScript, and React.js.",
        "Working with ASP.NET MVC for backend development and integrating it with frontend components.",
        "Collaborating with a small team of developers to build and improve a US-based website project.",
        "Handling tasks related to database management using MS SQL and MySQL.",
      ],
    },
    {
      title: "Online Course - Code Basics",
      company_name: "Code Basics",
      icon: code, 
      iconBg: "#E6DEDD",
      date: "Completed in 2023",
      points: [
        "Learned and practiced Excel for data analysis and reporting.",
        "Gained proficiency in SQL for querying and managing databases.",
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
      name: "MERN-Stack E-Commerce Website",
      description:
        "Built a full-stack e-commerce application similar to Amazon with features like product display, cart management, user authentication, and payment processing.",
      tags: [
        { name: "MongoDB", color: "green-text-gradient" },
        { name: "Express.js", color: "blue-text-gradient" },
        { name: "React.js", color: "pink-text-gradient" },
        { name: "Node.js", color: "yellow-text-gradient" },
        { name: "Redux", color: "purple-text-gradient" },
        { name: "PayPal API", color: "red-text-gradient" },
      ],
      image: mernEcommerce, // Assign the imported image
      source_code_link: "https://github.com/", // Replace with your repo link
    },
    {
      name: "ASP.NET MVC E-Commerce Application",
      description:
        "Developed a feature-rich e-commerce application with functionalities such as product CRUD operations, user authentication, and order management.",
      tags: [
        { name: "ASP.NET MVC", color: "blue-text-gradient" },
        { name: "Entity Framework", color: "green-text-gradient" },
        { name: "SQL Server", color: "purple-text-gradient" },
        { name: "Bootstrap", color: "pink-text-gradient" },
      ],
      image: aspEcommerce, // Assign the imported image
      source_code_link: "https://github.com/", // Replace with your repo link
    },
  ];
  

  
export { services, technologies, experiences, testimonials, projects };