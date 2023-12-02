import { useEffect, useState } from "react";
import { BASE_API_URL } from "../services/constants.js";

export const useFetch = (endPoint) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_API_URL}${endPoint}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        throw new Error(error); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endPoint]);

  return {
    loading,
    items,
    
  };
};