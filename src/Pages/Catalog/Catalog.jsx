import style from "./Catalog.module.css";
import { SearchBar } from "./SearchBar";
import { MovieGrid } from "./MovieGrid";
import { useFetchData } from "../../hooks/useFetchData";
import { Button } from "../../components/Button/Button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

export const Catalog = () => {
  const [query, setQuery] = useState("");
  const [genreId, setGenreId] = useState(null);
  const { search, genres, fetchFilteredSearch, fetchGenres } = useFetchData();

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleClickButton = () => fetchFilteredSearch(query, genreId);

  return (
    <div className={style["catalog-page"]}>
      <SearchBar
        genres={genres}
        setQuery={setQuery}
        setGenreId={setGenreId}
        searchButton={
          <Button
            text="Search"
            type="primary"
            size={"small"}
            icon={FaMagnifyingGlass}
            onClick={handleClickButton}
          />
        }
      />
      <MovieGrid movies={search} />
    </div>
  );
};
