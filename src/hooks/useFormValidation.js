import { useState } from "react";

const useFormValidation = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = {};

    if (value.trim() === "") {
      newErrors[name] = `${name} is required.`;
    }

    if (name === "price") {
      if (isNaN(value)) {
        newErrors[name] = "Price must be a number.";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: newErrors[name] }));
  };

  return {
    formData,
    errors,
    handleInputChange,
    setFormData,
  };
};

export default useFormValidation;
