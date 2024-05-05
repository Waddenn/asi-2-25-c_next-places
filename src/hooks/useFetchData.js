import { useEffect, useState } from "react";
import { filterPlace } from "@/services/filterService";

const useFetchData = (filters) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(filters).then(setData).catch(console.error);
  }, [filters]);

  return data;
};

async function fetchData(filters) {
  const response = await fetch("/api/places");
  validateResponse(response);

  const places = await response.json();
  return places.filter((place) => filterPlace(place, filters));
}

function validateResponse(response) {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Expected JSON response");
  }
}

export default useFetchData;
