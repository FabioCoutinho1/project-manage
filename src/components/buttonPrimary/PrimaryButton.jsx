import React from "react";
import { Link } from "react-router";

const PrimaryButton = ({
  text,
  type,
  fontSize,
  styleButton,
  navigationButton,
  onClick,
}) => {
  const stylesButtons = {
    primary: `bg-purple-800 text-white px-4 py-2.5
     rounded-2xl font-bold font-Poppins ${fontSize}`,
    secondary: `border-2 border-purple-800 text-purple-700 px-4 py-2.5
     rounded-2xl font-bold font-Poppins ${fontSize}`,
  };
  return (
    <Link to={navigationButton}>
      <button
        onClick={onClick}
        className={`px-4 py-2.5 rounded-2xl  font-bold font-Poppins 
        ${stylesButtons[styleButton]}`}
        type={type}
      >
        {text}
      </button>
    </Link>
  );
};

export default PrimaryButton;
