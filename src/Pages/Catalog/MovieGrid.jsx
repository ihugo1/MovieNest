import style from "./MovieGrid.module.css";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { PagingButtons } from "../../components/PagingButtons/PagingButtons";

export const MovieGrid = ({ results, paginButtons }) => {
  return (
    <div className={style["movie-grid"]}>
      {!results || results.length === 0 ? (
        <div className={style["empty-grid"]}>
          <p>
            Looks like you haven't searched anything yet <br /> or it's not in
            our catalogue
          </p>
        </div>
      ) : (
        <>
          <h2 className={style["title"]}>Results:</h2>
          {PagingButtons}
          <div className={style["movie-grid-container"]}>
            {results.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                name={movie.title}
                poster_path={movie.poster_path}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
