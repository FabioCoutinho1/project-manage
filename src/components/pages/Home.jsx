import React from "react";
import PrimaryButton from "../buttonPrimary/PrimaryButton";

const Home = () => {
  return (
    <div>
      Home
      <h2>
        Bem vindo ao <span>PJTmanager </span>
        seu gestor de projetos
      </h2>
      <PrimaryButton text={"Criar Projeto"} />
    </div>
  );
};

export default Home;
