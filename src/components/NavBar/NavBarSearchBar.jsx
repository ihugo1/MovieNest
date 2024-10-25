import style from "./NavBarSearchBar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getMovieList } from "../../services/api";
import { useEffect, useState } from "react";
import { NavBarResults } from "./NavBarResults";

export const NavBarSearchBar = () => {
  const [resultsList, setResultsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovieList = async (searchQuery) => {
    if (searchQuery) {
      setResultsList(await getMovieList(searchQuery));
    } else {
      setResultsList([]);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => fetchMovieList(searchQuery), 400);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <div className={style["searchbar-container"]}>
      <div className={style["searchbar"]}>
        <input
          className={style["input"]}
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <div className={style["icon-container"]}>
          <FaMagnifyingGlass className={style["icon"]} />
        </div>
      </div>
      <NavBarResults list={resultsList} />
    </div>
  );
};


