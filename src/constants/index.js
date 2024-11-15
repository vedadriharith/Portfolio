import { spring } from "framer-motion";
import {
  ml,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  numpy,
  git,
  matplotlib,
  mysql,
  springs,
  django,
  powerbi,
  coldmail,
  pandas,
  sklearn,
  spam,
  coffee,
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
    title: "Machine Learning Engineer",
    icon: ml,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "matplotlib",
    icon: matplotlib,
  },
  {
    name: "sklearn",
    icon: sklearn,
  },
  {
    name: "Spring",
    icon: springs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "PowerBI",
    icon: powerbi,
  },
];

const projects = [
  {
    name: "Cold Email Generator",
    description:
      "This project aims to build an end-to-end cold email generator using Llama 3.1, a large language model (LLM). The tool helps software services companies like TCS, Infosys acquire projects by automating the process of writing cold emails to potential clients.",
    tags: [
      {
        name: "Llama 3.1",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: coldmail,
    source_code_link: "https://github.com/vedadriharith/Cold_Email_Generator",
  },
  {
    name: "Spam Detection Classifier",
    description:
      "The project focuses on deploying a trained email spam classifier model using Flask, a Python web framework, and Render for cloud deployment. It guides users through creating a web application that allows users to input email text and receive spam classification results.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: spam,
    source_code_link: "https://github.com/vedadriharith/Spam_Detection_Classifier",
  },
  {
    name: "Coffee Website",
    description:
      "A responsive coffee website built with HTML, CSS, and JavaScript, featuring sections like Menu and Testimonials, and interactive elements like a testimonial slider. Designed for a visually engaging, user-friendly experience across devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: coffee,
    source_code_link: "https://github.com/vedadriharith/Responsive-Coffee-Website",
  },
];

export { services, technologies, projects };