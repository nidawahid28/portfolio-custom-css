import React from 'react'
import Heading from './Heading';
import Card from './Card';
import "../app/styles/project.css";

const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A Typescript-based app for managing and organizing tasks efficiently.",
    img: "/project01.jpg",
    tags: ["Node", "Typescript"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "An app to track time with an interactive countdown feature.",
    img: "/project02.jpg",
    tags: ["Node", "Typescript"],
  },
  {
    id: 2,
    title: "Currency Convertor Project",
    desc: "A simple Typescript-powered tool for converting currencies with real-time rates.",
    img: "/project03.JPG",
    tags: ["Node", "Typescript"],
  },
  {
    id: 3,
    title: "Static Interactive Resume",
    desc:
      "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/project04.jpg",
    tags: ["Node", "Typescript", "HTML", "CSS"],
  },
  {
    id: 4,
    title: "Simple Calculator Project",
    desc: "A basic Typescript calculator for performing essential arithmetic operations.",
    img: "/project05.JPG",
    tags: ["Node", "Typescript"],
  },
  {
    id: 5,
    title: "Next.js Application with Dynamic Routes",
    desc:
      "A Next.js app with dynamic routing that displays country details via unique URLs linked from a static country list.",
    img: "/project06.jpg",
    tags: ["Node", "Typescript", "HTML", "CSS", "Next.js"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container" data-aos="zoom-in-up">
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
