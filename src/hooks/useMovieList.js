import { useState } from "react";
import { API_BASE_URL, FETCH_OPTIONS } from "../services/confi";

export const useMovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(1); 
  
  const fetchMovieList = async ({ endpoint, append = false }) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(API_BASE_URL + endpoint, FETCH_OPTIONS);
      const list = await response.json();
      setMovieList((prev) => (append ? [...prev, ...list.results] : list.results));
      setPages(list.total_pages);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { movieList, loading, error, pages, fetchMovieList };
};

