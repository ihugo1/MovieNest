import style from "./Catalog.module.css";
import { SearchBar } from "./SearchBar";
import { MovieGrid } from "./MovieGrid";
import { PagingButtons } from "../../components/PagingButtons/PagingButtons";
import React, { useEffect, useState } from "react";

export const Catalog = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState (1);

  useEffect(() => {
    fetchData(`search/movie?query=${query}`);
  }, [query]);

  return (
    <div className={style["catalog-page"]}>
      <SearchBar setQuery={setQuery} />
      <MovieGrid 
        results={data}
        paginButtons= {
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
