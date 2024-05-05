import React from "react";
import TextInput from "@/components/Form/TextInput";
import useDynamicOptions from "@/hooks/useDynamicOptions";
import DynamicFormField from "./DynamicFormField";

const Form = ({ formData, handleInputChange, errors }) => {
  const options = useDynamicOptions(formData.placeType);

  return (
    <>
      {[
        { label: "Name of Place", name: "placeName" },
        { label: "Address", name: "address" },
        { label: "City", name: "city" },
        { label: "Postal Code", name: "postalCode" },
        { label: "Country", name: "country" },
      ].map((field) => (
        <TextInput
          key={field.name}
          label={field.label}
          name={field.name}
          value={formData[field.name]}
          onChange={handleInputChange}
          errorMessage={errors[field.name]}
          maxLength={30}
        />
      ))}
      {options.map((option) => (
        <DynamicFormField
          key={option.name}
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
          field={option}
          maxLength={5}
        />
      ))}
    </>
  );
};

export default Form;
