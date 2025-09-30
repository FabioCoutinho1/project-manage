import React from "react";

const Input = ({ type, name, text, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-1x text-purple-800 font-Poppins" htmlFor={name}>
        {text}
      </label>
      <input
        className="
        border-b-2 border-purple-700 py-1.5 px-3 outline-0 borde
        bg-purple-100 rounded-md focus:outline-2 outline-purple-700 duration-75
        shadow-lg/30 shadow-purple-950
        "
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
