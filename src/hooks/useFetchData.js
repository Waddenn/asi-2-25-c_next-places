import { useEffect, useState } from "react";
import { filterPlace } from "../services/filterService"; 

const useFetchData = (filters) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/places");
        if (!response.ok) throw new Error("Network response was not ok");

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json"))
          throw new Error("Expected JSON response");

        const result = await response.json();
        const filteredData = result.filter((place) =>
          filterPlace(place, filters),
        ); 
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [filters]);

  return data;
};

export default useFetchData;
