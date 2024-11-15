import style from "./FeaturedMovies.module.css";
import { useMovieList } from "../../hooks/useMovieList";
import { MovieCard } from "../MovieCard/MovieCard";
import { useEffect } from "react";

export const FeaturedMovies = ({ type }) => {
  const { movieList, loading, error, fetchMovieList } = useMovieList();

  useEffect(() => {
    fetchMovieList({ endpoint: `movie/${type}` });
  }, []);

  return (
    <div className={style["featured-movies"]}>
      <h3 className={style["title"]}>{type.replace(/_/g, " ")}</h3>
      <div className={style["container"]}>
        {error && <div>Error!</div>}
        {loading && <div>Loading...</div>}
        {movieList &&
          movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              name={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
      </div>
    </div>
  );
};
