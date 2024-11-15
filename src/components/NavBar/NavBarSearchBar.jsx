import style from "./NavBarSearchBar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { NavBarResults } from "./NavBarResults";
import { useMovieList } from "../../hooks/useMovieList";

export const NavBarSearchBar = () => {
  const [query, setQuery] = useState("");
  const { movieList, loading, error, fetchMovieList } = useMovieList();

  const handleOnChange = (e) => setQuery(e.target.value);

  useEffect(() => {
    fetchMovieList({ endpoint: `search/movie?query=${query}` });
  }, [query]);

  return (
    <div className={style["searchbar-container"]}>
      <div className={style["searchbar"]}>
        <input
          className={style["input"]}
          type="text"
          placeholder="Search..."
          onChange={handleOnChange}
        />
        <div className={style["icon-container"]}>
          <FaMagnifyingGlass className={style["icon"]} />
        </div>
      </div>
      {loading && (
        <div className={style["loading"]}>
          <p className={style["label"]}>Loading...</p>
        </div>
      )}
      {error && (
        <div className={style["error"]}>
          <p className={style["label"]}>Error</p>
        </div>
      )}
      {movieList && <NavBarResults list={movieList} />}
    </div>
  );
};
