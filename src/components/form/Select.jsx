import React from "react";

const Select = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="category">Selecione uma categoria:</label>
      <select
        className="
        bg-purple-100 py-1 px-2 rounded-md outline-0
        focus:ring-amber-800 outline-purple-700 border-b-2 border-purple-700
        "
        name="category"
        id="category"
      >
        <option value="">Selecione uma opção</option>
        <option className="hover:bg-purple-300" value="1">Infra</option>
        <option value="2">Dev</option>
        <option value="3">Design</option>
      </select>
    </div>
  );
};

export default Select;
