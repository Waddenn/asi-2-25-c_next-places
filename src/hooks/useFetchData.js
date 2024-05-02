import { useEffect, useState } from "react";
import { filterPlace } from "../services/filterService";

const useFetchData = (filters) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/places");
        if (!response.ok) throw new Error("Network response was not ok");

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Expected JSON response");
        }

        const places = await response.json();
        const filteredData = places.filter((place) =>
          filterPlace(place, filters)
        );
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filters]);

  return data;
};

export default useFetchData;
