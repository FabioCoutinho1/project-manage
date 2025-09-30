import React from "react";
import PrimaryButton from "../buttonPrimary/PrimaryButton";
import ProjectsAndServices from "../projectsAndServices/ProjectsAndServices";
import Title from "../title/Title";

const Projects = () => {
  return (
    <section className="flex flex-col gap-7 p-4 justify-center h-full w-full bg-purple-50">
      <div className="flex justify-between items-center w-full">
        <Title text={"Meus projetos"} />
        <PrimaryButton
          text={"Criar Projeto"}
          styleButton={"primary"}
          navigationButton={"/newProject"}
        />
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
