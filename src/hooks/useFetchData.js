import { useState } from "react";

const BASE_URL = "https://api.themoviedb.org/3/";
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFiNjVlYzk3NjZjNTkyMWIwOTgyMTA5ZDEzYTRlZCIsIm5iZiI6MTcyNjk0MzUyNC40ODE1NDEsInN1YiI6IjY2ZWUyMDA1OTJkMzk2ODUzODNhZThiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4serx7hQhrRQcLbB3dApJ1r88ZJpGhjeUi5ovSKi84",
  },
};

export const useFetchData = () => {
  const [search, setSearch] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [videos, setVideos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, callback) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, OPTIONS);
      if (!response.ok) throw new Error("Error en la solicitud");
      const data = await response.json();
      callback(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearch = (query) => {
    if (!query) return setSearch([]);
    fetchData(`${BASE_URL}search/movie?query=${query}`, (data) =>
      setSearch(data.results)
    );
  };

  const fetchFeatured = (type) => {
    if (!type) return setSearch([]);
    fetchData(`${BASE_URL}movie/${type}`, (data) =>
      setFeatured(data.results)
    );
  };

  const fetchMovie = (id) => {
    if (!id) return setMovie([]);
    fetchData(`${BASE_URL}movie/${id}`, setMovie);
  };

  const fetchGenres = () => {
    fetchData(`${BASE_URL}genre/movie/list`, (data) => setGenres(data.genres));
  };

  const fetchFilteredSearch = (query = null, genreId = null, page=1) => {
    const url = query
      ? `${BASE_URL}search/movie?query=${query}&page=${page}`
      : `${BASE_URL}discover/movie?page=1&with_genres=${genreId}&page=${page}`;
    fetchData(url, (data) => {
      setTotalPages(data.total_pages)
      setSearch(
        genreId
          ? data.results.filter((result) =>
              result.genre_ids.includes(parseInt(genreId))
            )
          : data.results
      );
    });
  };

  const fetchVideos = (id) => {
    fetchData(`${BASE_URL}movie/${id}/videos`, setVideos);
  }

  return {
    search,
    featured,
    movie,
    genres,
    videos,
    fetchSearch,
    fetchFeatured,
    fetchMovie,
    fetchGenres,
    totalPages,
    fetchFilteredSearch,
    fetchVideos,
    loading,
    error,
  };
};
