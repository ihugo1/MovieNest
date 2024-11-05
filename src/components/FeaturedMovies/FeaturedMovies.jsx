import React, { useEffect } from "react";
import style from "./FeaturedMovies.module.css";
import { MovieCard } from "../MovieCard/MovieCard";
import { useFetchData } from "../../hooks/useFetchData";

export const FeaturedMovies = ({ type }) => {
  const { featured, loading, error, fetchFeatured } = useFetchData();

  useEffect(() => {
    fetchFeatured(type);
  }, []);

  return (
    <section className={style["featured-movies"]}>
      <h3 className={style["title"]}>{type.replace(/_/g, " ")}</h3>
      <ul className={style["container"]}>
        {loading && <div>Loading...</div>}
        {error && <div>Erro fetching</div>}
        {featured && 
          featured.slice(0, 8).map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              name={movie.title}
              poster_path={movie.poster_path}
            />
        ))}
      </ul>
    </section>
  );
};
