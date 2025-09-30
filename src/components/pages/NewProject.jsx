import Input from "../form/Input";
import Select from "../form/Select";

import SubmitButton from "../form/SubmitButton";
import Title from "../title/Title";

const NewProject = () => {
  return (
    <section className="flex flex-col gap-7 p-4 justify-center h-full bg-purple-50">
      <div>
        <Title text={"Novo Projeto"} />
        <p className="font-Poppins font-semibold text-center">
          Crie seu projeto para depois adicionar serviços
        </p>
      </div>
      <form className="flex flex-col gap-4">
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

        <SubmitButton text={"Enviar"} />
      </form>
    </section>
  );
};

export default NewProject;
