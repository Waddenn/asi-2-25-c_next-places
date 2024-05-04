import { useState, useCallback } from "react";

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(
    (newState = initialState) => {
      setValues(newState);
    },
    [initialState]
  );

  return [values, handleChange, resetForm];
};

export default useForm;
