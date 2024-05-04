import { useState, useCallback } from "react";
const useForm = (initialState, initialFormData) => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      if (value === "") {
        resetForm(initialFormData);
      } else {
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      }
    },
    [initialFormData]
  );

  const resetForm = useCallback(
    (newState = initialFormData) => {
      setValues(newState);
    },
    [initialFormData]
  );

  return [values, handleChange, resetForm];
};

export default useForm;
