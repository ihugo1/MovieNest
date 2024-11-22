import { useState, useEffect } from "react";
import style from "./Catalog.module.css";
import { SearchBar } from "./SearchBar";
import { useMovieList } from "../../hooks/useMovieList";
import { MovieGrid } from "./MovieGrid";

export const Catalog = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { movieList, loading, pages, fetchMovieList } = useMovieList();

  useEffect(() => {
    fetchMovieList({
      endpoint: `search/movie?query=${query}&page=${currentPage}`,
      append: currentPage > 1, 
    });
  }, [query, currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      if (bottom && !loading && currentPage < pages) {
        setCurrentPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpia el listener
    };
  }, [loading, currentPage, pages]);

  return (
    <div className={style["catalog-page"]}>
      <SearchBar setQuery={setQuery} />
      <MovieGrid results={movieList} />
      {loading && <p>Loading...</p>}
    </div>
  );
};
