import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="
      bg-purple-700 text-white font-Poppins rounded-md py-1 font-bold text-2xl
      shadow-lg/30 shadow-purple-950
      "
    >
      {text}
    </button>
  );
};

export default SubmitButton;
