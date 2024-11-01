import style from "./Catalog.module.css";
import { SearchBar } from "./SearchBar";
import { MovieGrid } from "./MovieGrid";
import { useFetchData } from "../../hooks/useFetchData";
import React, { useEffect, useState } from "react";

export const Catalog = () => {
  const [query, setQuery] = useState("");
  const [genreId, setGenreId] = useState(null);
  const { search, genres, fetchFilteredSearch, fetchGenres } = useFetchData();

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    console.log(search)
  }, [search]);

  const handleClickButton = () => fetchFilteredSearch(query, genreId);

  return (
    <div className={style["catalog-page"]}>
      <SearchBar
        genres={genres}
        setQuery={setQuery}
        setGenreId={setGenreId}
        onClick={handleClickButton}
      />
      {(search.length>0)
      ? <MovieGrid movies={search} /> 
      : null}
    </div>
  );
};
