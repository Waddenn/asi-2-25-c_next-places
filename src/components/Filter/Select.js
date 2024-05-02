import React from "react";

const Select = ({ name, value, onChange, options, label }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="p-3 rounded border border-gray-300 text-base mb-4 focus:outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 last:mb-0"
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
