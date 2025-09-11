import figure1 from "../../assets/figure1.svg";
import figure2 from "../../assets/figure2.svg";
import figure3 from "../../assets/figure3.svg";

import { useSlider } from "../../hooks/useSlider";
import { motion, AnimatePresence } from "motion/react";

const slideData = [
  {
    text: "Adicione projetos  que esteja trabalhando com seus custos previstos",
    svg: figure1,
  },
  { text: "Estipule um orçamento ao projeto e seus serviços ", svg: figure2 },
  { text: "Adicione serviços com valor previsto", svg: figure3 },
];

const Slider = () => {
  const { currentSlide, goToSlide } = useSlider(slideData.length);
  const { text, svg } = slideData[currentSlide];

  const styleBallSlide =
    "w-3.5 h-3.5 border-2 border-purple-800 rounded-full block";

  return (
    <div className="flex flex-col gap-5 items-center relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=""
        >
          <p className="font-bold text-center font-Poppins tex">{text}</p>
          <img className="w-96 h-72" src={svg} alt="imagem svg indescritiva" />
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2">
        {slideData.map((_, index) => (
          <span
            key={index}
            className={`${styleBallSlide} ${
              index === currentSlide ? "bg-purple-800" : ""
            }`}
            onClick={() => {
              goToSlide(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
