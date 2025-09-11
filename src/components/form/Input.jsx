import React from "react";

const Input = ({ type, name, text, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-1x text-purple-800" htmlFor={name}>
        {text}
      </label>
      <input
        className="
        border-b-2 border-purple-700 py-1 px-3 outline-0 borde
        bg-purple-100 rounded-md focus:outline-2 outline-purple-700 duration-75
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
