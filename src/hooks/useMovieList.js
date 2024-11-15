import { useState } from "react";
import { API_BASE_URL, FETCH_OPTIONS } from "../services/confi";

export const useMovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovieList = async ({ endpoint }) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(API_BASE_URL + endpoint, FETCH_OPTIONS);
      const list = await response.json();
      setMovieList(list.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { movieList, loading, error, fetchMovieList };
};
