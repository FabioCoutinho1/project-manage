import { motion } from "motion/react";

const InforProjectAndService = ({ isLineBottom = false }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden flex flex-col gap-2"
    >
      <p>
        Infrestrutura{" "}
        <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
      </p>
      <p>Orçamento: R$ 1.500,00</p>

      {isLineBottom && (
        <span className="h-0.5 w-full bg-purple-700 inline-block"></span>
      )}
    </motion.div>
  );
};

export default InforProjectAndService;
