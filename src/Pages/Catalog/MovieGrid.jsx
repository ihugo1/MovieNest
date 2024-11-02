import style from "./MovieGrid.module.css";
import { MovieCard } from "../../components/MovieCard/MovieCard";

export const MovieGrid = ({ movies, pagingButtons }) => {
  if (movies.length <= 0) {
    return (
      <div className={style["empty-grid"]}>
        <p>
          Looks like you haven't searched anything yet <br /> or it's not in our
          catalogue
        </p>
      </div>
    );
  }

  return (
    <div className={style["movie-grid"]}>
      <h2 className={style['title']}>Results:</h2>
      {pagingButtons}
      <div className={style["movie-grid-container"]}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            name={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
      {pagingButtons}
    </div>
  );
};
