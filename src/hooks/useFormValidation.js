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
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (value.trim() === "") {
        newErrors[name] = `${name} is required.`;
      } else if (name === "price" && isNaN(value)) {
        newErrors[name] = "Price must be a number.";
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  return {
    formData,
    errors,
    handleInputChange,
    setFormData,
  };
};

export default useFormValidation;
