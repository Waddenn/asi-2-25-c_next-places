import { useState, useEffect } from "react";
import formOptions from "@/constants/formOptions";

const useDynamicOptions = (placeType) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(formOptions[placeType] || []);
  }, [placeType]);

  return options;
};

export default useDynamicOptions;
