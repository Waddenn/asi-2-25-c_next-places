import React, { useEffect, useState } from "react";
import FormInput from "@/components/Form/FormInput";
import formOptions from "@/constants/formOptions";

const Form = ({ formData, handleInputChange }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(formOptions[formData.placeType] || []);
  }, [formData.placeType]);

  const renderAdditionalFields = () =>
    options.map((option) => {
      const inputType =
        option.name === "starRating" || option.name === "price"
          ? "number"
          : "text";
      return (
        <FormInput
          key={option.name}
          label={option.label}
          name={option.name}
          type={inputType}
          options={option.options}
          value={formData[option.name]}
          onChange={handleInputChange}
        />
      );
    });

  return (
    <>
      <FormInput
        label="Name of Place"
        name="placeName"
        value={formData.placeName}
        onChange={handleInputChange}
      />
      <FormInput
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />
      <FormInput
        label="City"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
      />
      <FormInput
        label="Postal Code"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleInputChange}
      />
      <FormInput
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleInputChange}
      />
      {renderAdditionalFields()}
    </>
  );
};

export default Form;
