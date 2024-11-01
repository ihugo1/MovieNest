import style from "./SearchBar.module.css";
import { Button } from "../../components/Button/Button";

export const SearchBar = ({ genres, setQuery, setGenreId, onClick }) => {
  return (
    <div className={style["search-bar"]}>
      <input
        className={style["input"]}
        type="text"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by title and/or genre"
      />
      <select
        className={style["select"]}
        name="genres"
        id=""
        onChange={(event) => setGenreId(event.target.value || null)}
      >
        <option value={""}>-</option>
        {genres && genres.length > 0
          ? genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))
          : null}
      </select>
      <button onClick={onClick}>Search</button>
    </div>
  );
};
