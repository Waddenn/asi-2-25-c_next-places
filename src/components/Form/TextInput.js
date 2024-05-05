import React from "react";

const TextInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  errorMessage,
  maxLength,
  ...props
}) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-bold mb-2 mt-2">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      required
      className={`appearance-none block w-full bg-white text-gray-700 border ${errorMessage ? "border-red-500" : "border-gray-400"} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500`}
      {...props}
    />
    {errorMessage && (
      <p className="text-red-500 text-xs italic">{errorMessage}</p>
    )}
  </div>
);

export default TextInput;
