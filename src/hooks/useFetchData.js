import { useEffect, useState } from "react";

const BASE_URL = "https://api.themoviedb.org/3/";
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFiNjVlYzk3NjZjNTkyMWIwOTgyMTA5ZDEzYTRlZCIsIm5iZiI6MTcyNjk0MzUyNC40ODE1NDEsInN1YiI6IjY2ZWUyMDA1OTJkMzk2ODUzODNhZThiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4serx7hQhrRQcLbB3dApJ1r88ZJpGhjeUi5ovSKi84",
  },
};

export const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    if (!endpoint) return;
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(BASE_URL + endpoint, OPTIONS);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (endpoint) {
      fetchData();
    } else {
      setData([]);
    }
  }, [endpoint]);

  return { data, loading, error };
};
