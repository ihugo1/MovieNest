import style from "./NavBarSearchBar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { NavBarResults } from "./NavBarResults";
import { useFetchData } from "../../hooks/useFetchData";

export const NavBarSearchBar = () => {
  const [query, setQuery] = useState("");
  const { search, fetchSearch, loading, error } = useFetchData();

  useEffect(() => {
    if(query){
      fetchSearch(query);
    }else{
      fetchSearch(null);
    }
  }, [query]);

  return (
    <div className={style["searchbar-container"]}>
      <div className={style["searchbar"]}>
        <input
          className={style["input"]}
          type="text"
          placeholder="Search..."
          onChange={(event) => setQuery(event.target.value)}
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
          <p p className={style["label"]}>
            {error.message || "Something went wrong."}
          </p>
        </div>
      )}
      {search && <NavBarResults list={search} />}
    </div>
  );
};
