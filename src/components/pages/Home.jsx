import PrimaryButton from "../buttonPrimary/PrimaryButton";
import Slider from "../slider/Slider";

const Home = () => {
  return (
    <section className="flex flex-col gap-7 p-4  h-full bg-purple-50">
      <p className="text-center">HOME</p>
      <h2 className="text-2xl text-center font-Poppins ">
        Bem vindo ao
        <span className="font-extrabold text-purple-800 font-Poppins">
          {" "}
          PJTmanager{" "}
        </span>
        seu gestor de projetos
      </h2>
      <div className="flex justify-between">
        <PrimaryButton
          text={"Criar Projeto"}
          fontSize={"text-1x"}
          styleButton={"primary"}
          navigationButton={"/newProject"}
        />
        <PrimaryButton
          text={"Ver projetos"}
          fontSize={"text-1x"}
          styleButton={"secondary"}
          navigationButton={"/projects"}
        />
      </div>

      <Slider />
    </section>
  );
};

export default Home;
