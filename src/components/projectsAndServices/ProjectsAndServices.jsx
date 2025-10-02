import { FaRegTrashAlt, FaPen } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import InforProjectAndService from "./InforProjectAndService";

const ProjectsAndServices = () => {
  const [isOpem, SetIsOpem] = useState(false);

  return (
    <div
      className="flex justify-between border-b-2 duration-300 ease-in-out
     transition-all border-purple-700 pb-2.5"
    >
      <div className=" flex flex-col gap-2">
        <h2 className="font-Poppins font-bold ">Nome do projeto</h2>

        <AnimatePresence>
          {isOpem && (
            // <motion.div
            //   initial={{ height: 0, opacity: 0 }}
            //   animate={{ height: "auto", opacity: 1 }}
            //   exit={{ height: 0, opacity: 0 }}
            //   transition={{ duration: 0.2 }}
            //   className="overflow-hidden flex flex-col gap-2"
            // >
            //   <p>
            //     Infrestrutura{" "}
            //     <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
            //   </p>
            //   <p>Orçamento: R$ 1.500,00</p>
            // </motion.div>

            <InforProjectAndService />
          )}
        </AnimatePresence>
      </div>
      <div className="flex gap-10 items-start text-2xl text-purple-700">
        <button>
          <FaPen />
        </button>
        <button>
          <FaRegTrashAlt />
        </button>
        <button onClick={() => SetIsOpem(!isOpem)}>
          {isOpem ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
    </div>
  );
};

export default ProjectsAndServices;
