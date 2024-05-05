import { useState, useCallback } from "react";

const useForm = (initialState, initialFormData) => {
  const [values, setValues] = useState(initialState);

  const resetForm = useCallback(
    (newState = initialFormData) => {
      setValues(newState);
    },
    [initialFormData]
  );

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      if (value === "") {
        resetForm(initialFormData);
        return;
      }

      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    },
    [resetForm, initialFormData]
  );

  return [values, handleChange, resetForm];
};

export default useForm;
