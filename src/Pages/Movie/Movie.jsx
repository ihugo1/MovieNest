import style from "./Movie.module.css";
import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovie";
import { useEffect } from "react";
import { MovieInfo } from "./MovieInfo";

export const Movie = () => {
  const { id } = useParams();
  const { movie, loading, error, fetchMovie } = useMovie();

  useEffect(() => {
    fetchMovie({ id });
  }, [id]);

  return (
    <div className={style["movie-info-page"]}>
      {loading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      {movie && <MovieInfo movie={movie} />}
    </div>
  );
};
