import React from "react";

const PrimaryButton = ({ text, type }) => {
  return (
    <button
      className="bg-purple-800 text-white px-4 py-2.5 rounded-2xl font-bold"
      type={type}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
