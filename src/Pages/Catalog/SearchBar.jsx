import style from "./SearchBar.module.css";

export const SearchBar = ({ setQuery }) => {
  const handleInputChange = (e) => setQuery(e.target.value);

  return (
    <div className={style["search-bar"]}>
      <input
        className={style["input"]}
        type="text"
        onChange={handleInputChange}
        placeholder="Search"
      />
    </div>
  );
};
