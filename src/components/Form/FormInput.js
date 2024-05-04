import React from "react";

const FormInput = ({
  label,
  name,
  type = "text",
  options,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      {options ? (
        <select
          name={name}
          required
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
      ) : (
        <input
          type={type}
          name={name}
          required
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormInput;
