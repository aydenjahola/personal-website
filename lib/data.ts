import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import guestbookImg from "@/public/images/guestbook.png";
import quirkoImg from "@/public/images/quirko.png";
import solarracingImg from "@/public/images/solarracing.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front Line Technician - Harvey Norman",
    location: "Drogheda, Ireland",
    description:
      "I worked as a front line technician for 1 year. I was responsible for fixing customer's devices and selling products.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Lead Software Engineer - DCU Solar Racing",
    location: "Dublin, Ireland",
    description:
      "I'm currently the lead software engineer for DCU Solar Racing. I'm responsible for developing the website and the telemetry system.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Computer Science Student",
    location: "Dublin, Ireland",
    description:
      "I'm currently studying computer science at DCU (Dublin City University). I'm learning about algorithms, data structures, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Guestbook",
    description:
      "A guestbook app where users can leave a message. It has features like authentication, pagination and more.",
    tags: [
      "React",
      "Next.js",
      "FaunaDB",
      "Tailwind",
      "GraphQL",
      "Framer Motion",
      "Vercel",
    ],
    imageUrl: guestbookImg,
    url: "https://guestbook.quirko.me/",
  },
  {
    title: "Quirko",
    description:
      "Quirko is a web app that shorten urls and allows for custom link prefix. It has features like authentication, pagination and more.",
    tags: [
      "React",
      "Full Stack",
      "bootstrap",
      "firebase",
      "python",
      "flask",
      "heroku",
    ],
    imageUrl: quirkoImg,
    url: "https://quirko.me/",
  },
  {
    title: "DCU Solar Racing",
    description:
      "I'm currently working on a website for DCU Solar Racing. It's a solar car team that competes in the Bridgestone World Solar Challenge.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Marked",
      "Vercel",
      "Gray Matter",
      "Next MDX",
      "NodeMailer",
      "swiper",
      "gsap",
    ],
    imageUrl: solarracingImg,
    url: "https://solarracing.ie/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Docker",
  "AWS",
  "Node.js",
  "Git",
  "Tailwind",
  "Vercel",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
