import style from "./Catalog.module.css";
import { SearchBar } from "./SearchBar";
import { MovieGrid } from "./MovieGrid";
import { PagingButtons } from "../../components/PagingButtons/PagingButtons";
import { useFetchData } from "../../hooks/useFetchData";
import { Button } from "../../components/Button/Button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

export const Catalog = () => {
  const [query, setQuery] = useState("");
  const [genreId, setGenreId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { search, genres, fetchFilteredSearch, fetchGenres, totalPages } = useFetchData();

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(()=>{
    fetchFilteredSearch(query, genreId, currentPage);
  },[currentPage])

  const handleClickButton = () => {
    setCurrentPage(1);
    fetchFilteredSearch(query, genreId, currentPage);
  };

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
      <MovieGrid
        movies={search}
        pagingButtons={
          <PagingButtons 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        }
      />
    </div>
  );
};
