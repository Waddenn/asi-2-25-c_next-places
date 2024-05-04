import React from "react";

const Select = ({ label, name, options, value, onChange, errorMessage }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">{label}</label>
      <select
        name={name}
        required
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errorMessage ? "border-red-500" : "border-gray-200"} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
        value={value}
        onChange={onChange}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errorMessage && (
        <p className="text-red-500 text-xs italic">{errorMessage}</p>
      )}
    </div>
  );
};

export default Select;
