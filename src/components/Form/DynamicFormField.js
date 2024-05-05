import React from "react";
import TextInput from "./TextInput";
import Select from "./Select";

const DynamicFormField = ({
  formData,
  handleInputChange,
  field,
  errors,
  maxLength,
}) => {
  const inputType =
    field.name === "starRating" || field.name === "price" ? "number" : "text";

  return (
    <>
      <Select
        label={field.label}
        name={field.name}
        type={inputType}
        options={field.options}
        value={formData[field.name]}
        onChange={handleInputChange}
      />
      {field.name === "freeOrPaid" && formData[field.name] === "paid" && (
        <TextInput
          label="Price"
          name="price"
          value={formData["price"]}
          onChange={handleInputChange}
          errorMessage={errors.price}
          maxLength={maxLength}
          required
        />
      )}
    </>
  );
};

export default DynamicFormField;
