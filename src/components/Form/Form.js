import React, { useEffect, useState } from "react";
import Select from "./Select";
import Input from "./Input";
import formOptions from "@/constants/formOptions";

const Form = ({ formData, handleInputChange }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(formOptions[formData.placeType] || []);
  }, [formData.placeType]);

  const renderAdditionalFields = () => {
    return options.map((option) => {
      const { name, label, options: selectOptions } = option;

      if (name === "starRating" || name === "price") {
        return (
          <Input
            key={name}
            label={label}
            name={name}
            type="number"
            value={formData[name]}
            onChange={(e) =>
              handleInputChange({
                target: { name, value: Number(e.target.value) },
              })
            }
          />
        );
      }

      if (name === "freeOrPaid") {
        return (
          <div key={name}>
            <Select
              label={label}
              name={name}
              options={selectOptions}
              value={formData[name]}
              onChange={handleInputChange}
            />
            {formData[name] === "paid" && (
              <Input
                key="price"
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={(e) =>
                  handleInputChange({
                    target: { name: "price", value: Number(e.target.value) },
                  })
                }
              />
            )}
          </div>
        );
      }

      return (
        <Select
          key={name}
          label={label}
          name={name}
          options={selectOptions}
          value={formData[name]}
          onChange={handleInputChange}
        />
      );
    });
  };

  return (
    <>
      <Input
        label="Name of Place"
        name="placeName"
        value={formData.placeName}
        onChange={handleInputChange}
      />
      <Input
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />
      <Input
        label="City"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
      />
      <Input
        label="Postal Code"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleInputChange}
      />
      <Input
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
