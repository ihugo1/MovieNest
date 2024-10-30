import style from "./NavBarSearchBar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { NavBarResults } from "./NavBarResults";
import { useFetchData } from "../../hooks/useFetchData";
import { useDebounce } from "../../hooks/useDebonce";

export const NavBarSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500); 
  const { data, loading, error } = useFetchData(
    debouncedSearchQuery ? `search/movie?query=${searchQuery}` : null
  );

  const handleOnChange = (event) => setSearchQuery(event.target.value);

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
      {loading &&
      <div className={style['loading']}>
        <p className={style['label']}>Loading...</p>
      </div>}
      {error && 
      <div className={style['error']}>
        <p p className={style['label']}>{error.message || "Something went wrong."}</p>
      </div>}
      {data && <NavBarResults list={data.results} />}
    </div>
  );
};
