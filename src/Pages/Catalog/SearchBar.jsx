import style from "./SearchBar.module.css";

export const SearchBar = ({ setQuery }) => {
  const handleOnChange = (e) => setQuery(e.target.value);

  return (
    <div className={style["search-bar"]}>
      <input
        className={style["input"]}
        type="text"
        onChange={handleOnChange}
        placeholder="Search by title and/or genre"
      />
    </div>
  );
};
