"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import artImg from "../assets/projects/2.png"; //Art
import gymImg from "../assets/projects/3.png"; //Gym
import cofImg from "../assets/projects/1.png"; //Cof
import fourImg from '../assets/projects/4.png'; //Art
import fiveImg from '../assets/projects/5.png'; //Gym

import ProjectItems from "./ProjectItems";

const titleStyle = "text-4xl font-bold inline border-b-4 border-red-600";

const gridOld = "grid md:grid-cols-2 gap-8";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className={titleStyle}>
          <br></br>
          <br></br>Services
        </p>
        <p className="py-6"></p>

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItems
            title='Service'
            backgroundImg={cofImg}
            projectUrl="/#contact"
            tech='Lawn Service'
          />

          <ProjectItems
            title='Service'
            backgroundImg={artImg}
            projectUrl="/#contact"
            tech='Lawn Service'
          />

          <ProjectItems
            title='Service'
            backgroundImg={gymImg}
            projectUrl="/#contact"
            tech='Lawn Service'
          />

          <ProjectItems
            title='Service'
            backgroundImg={fourImg}
            projectUrl='/#contact'
            tech='Lawn Service'
          />

          <ProjectItems
            title='Service'
            backgroundImg={fiveImg}
            projectUrl='/#contact'
            tech='Lawn Service'
          /> 

        </div>
      </div>
    </div>
  );
};

export default Projects;