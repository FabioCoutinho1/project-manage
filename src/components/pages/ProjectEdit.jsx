import React from "react";
import PrimaryButton from "../buttonPrimary/PrimaryButton";
import ProjectsAndServices from "../projectsAndServices/ProjectsAndServices";
import InforProjectAndService from "../projectsAndServices/InforProjectAndService";

const ProjectEdit = () => {
  return (
    <section className="flex flex-col gap-7 p-4 w-full h-full bg-purple-50">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl font-Poppins font-semibold text-purple-900">Project Name</h2>
        <PrimaryButton
          text={"Editar projeto"}
          styleButton={"primary"}
          fontSize={"text-1x"}
        />
      </div>
      <InforProjectAndService isLineBottom={true}/>

      <div className="flex justify-between items-center">
        <h2 className="font-Poppins text-1x font-semibold text-purple-900">Serviço:</h2>
        <PrimaryButton text={"Adicionar serviço"} styleButton={"primary"} />
      </div>
      <ProjectsAndServices />
      <ProjectsAndServices />
      <ProjectsAndServices />
    </section>
  );
};

export default ProjectEdit;
