import React from "react";

const Input = ({ label, name, type = "text", value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      required
      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
