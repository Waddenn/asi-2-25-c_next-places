import { useState } from "react";

const useFormValidation = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData(name, value);
    validateField(name, value);
  };

  const updateFormData = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateField = (name, value) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (value.trim() === "") {
        newErrors[name] = `${name} is required.`;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData.placeName) newErrors.placeName = "Place name is required.";
      if (!formData.address) newErrors.address = "Address is required.";
      if (!formData.city) newErrors.city = "City is required.";
      if (!formData.postalCode)
        newErrors.postalCode = "Postal code is required.";
      if (!formData.country) newErrors.country = "Country is required.";
      if (!formData.placeType) newErrors.placeType = "Place type is required.";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    handleInputChange,
    validateForm,
  };
};

export default useFormValidation;
