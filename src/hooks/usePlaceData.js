// src/hooks/usePlaceData.js
import { useState, useEffect } from "react";

export function usePlaceData(id, initialData) {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await fetch(`/api/places?id=${id}`);
        const data = await response.json();
        setFormData(data);
      };
      fetchData();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "starRating") {
      setFormData((prev) => ({
        ...prev,
        [name]: Math.min(Math.max(Number(value), 1), 3),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return { formData, setFormData, handleInputChange };
}
