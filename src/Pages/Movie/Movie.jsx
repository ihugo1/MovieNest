import style from "./Movie.module.css";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { MovieInfo } from "./MovieInfo";
import { useEffect } from "react";

export const Movie = () => {
  const { id } = useParams();
  const { movie, loading, error, fetchMovie } = useFetchData();

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (movie) {
    return (
      <div className={style["movie-info-page"]}>
        <MovieInfo movie={movie} />
      </div>
    );
  }
};
