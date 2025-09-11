import React from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import PrimaryButton from "../buttonPrimary/PrimaryButton";

const NewProject = () => {
  return (
    <section>
      <div>
        <h2>Novo Projeto</h2>
        <p>Crie seu projeto para depois adicionar serviços</p>
      </div>
      <form>
        <Input
          type={"text"}
          name={"nameProject"}
          text={"Nome do projeto:"}
          placeholder={"Insira o nome do projeto"}
        />
        <Input
          type={"text"}
          name={"budgetProject"}
          text={"Orçamento do projeto:"}
          placeholder={"Insira o orçamento do projeto"}
        />

        <Select />

        <PrimaryButton text={"Criar"} styleButton={"primary"} type={"submit"} />
      </form>
    </section>
  );
};

export default NewProject;
