import { useState } from "react";
import PrimaryButton from "../buttonPrimary/PrimaryButton";
import ProjectsAndServices from "../projectsAndServices/ProjectsAndServices";
import InforProjectAndService from "../projectsAndServices/InforProjectAndService";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import { motion, AnimatePresence } from "framer-motion"; // Importe o motion e AnimatePresence

const ProjectEdit = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddServiceForm, setShowAddServiceForm] = useState(false);

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const toggleAddServiceForm = () => {
    setShowAddServiceForm(!showAddServiceForm);
  };

  return (
    <section className="flex flex-col gap-7 p-4 w-full h-full bg-purple-50">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl font-Poppins font-semibold text-purple-900">
          Project Name
        </h2>
        <PrimaryButton
          text={"Editar projeto"}
          styleButton={"primary"}
          fontSize={"text-1x"}
          onClick={toggleEditForm}
        />
      </div>
      <InforProjectAndService isLineBottom={true} />

      <AnimatePresence>
        {showEditForm && (
          <motion.form
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 overflow-hidden"
          >
            <Input
              type={"text"}
              name={"nameProject"}
              text={"Nome do projeto:"}
              placeholder={"Insira o novo nome do projeto"}
            />
            <Input
              type={"text"}
              name={"budgetProject"}
              text={"Novo orçamento do projeto:"}
              placeholder={"Insira o novo orçamento do projeto"}
            />
            <Select />
            <SubmitButton text={"Salvar alterações"} />
          </motion.form>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-center">
        <h2 className="font-Poppins text-1x font-semibold text-purple-900">
          Serviço:
        </h2>
        <PrimaryButton
          text={"Adicionar serviço"}
          styleButton={"primary"}
          onClick={toggleAddServiceForm}
        />
      </div>

      <AnimatePresence>
        {showAddServiceForm && (
          <motion.form
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 overflow-hidden"
          >
            <Input
              type={"text"}
              name={"nameService"}
              text={"Nome do serviço:"}
              placeholder={"Insira o nome do serviço"}
            />
            <Input
              type={"text"}
              name={"costService"}
              text={"Custo do serviço:"}
              placeholder={"Insira o custo do serviço"}
            />
            <Input
              type={"text"}
              name={"descriptionService"}
              text={"Descrição do serviço:"}
              placeholder={"Insira a descrição do serviço"}
            />
            <SubmitButton text={"Adicionar serviço"} />
          </motion.form>
        )}
      </AnimatePresence>

      <ProjectsAndServices />
      <ProjectsAndServices />
      <ProjectsAndServices />
    </section>
  );
};

export default ProjectEdit;
