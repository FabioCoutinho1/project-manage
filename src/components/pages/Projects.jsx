import React from "react";
import PrimaryButton from "../buttonPrimary/PrimaryButton";
import ProjectsAndServices from "../projectsAndServices/ProjectsAndServices";

const Projects = () => {
  return (
    <section className="flex flex-col gap-7 p-4 justify-center h-full w-full bg-purple-50">
      <div className="flex justify-between w-full">
        <h2 className="text-purple-800 text-2xl font-bold font-Poppins">
          Meus projetos
        </h2>
        <PrimaryButton text={"Criar Projeto"} styleButton={"primary"} />
      </div>

      <div className=" flex flex-col gap-5">
        <ProjectsAndServices />
        <ProjectsAndServices />
        <ProjectsAndServices />
      </div>
    </section>
  );
};

export default Projects;
