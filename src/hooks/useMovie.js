import { useState } from "react";
import { API_BASE_URL, FETCH_OPTIONS } from "../services/confi";

export const useMovie = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovie = async ({ id }) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(API_BASE_URL + `movie/${id}`, FETCH_OPTIONS);
      const fetchedMovie = await response.json();
      setMovie(fetchedMovie);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { movie, loading, error, fetchMovie };
};
