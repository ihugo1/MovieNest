import React from "react";
import style from "./FeaturedMovies.module.css";
import { MovieCard } from "../MovieCard/MovieCard";
import { useFetchData } from "../../hooks/useFetchData";

export const FeaturedMovies = ({ type }) => {
  const searchQuery = `movie/${type}`;
  const { data, loading, error } = useFetchData(searchQuery);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message || "Something went wrong."}</p>;
  }
  if (data) {
    const movies = data.results ? data.results.slice(0, 8) : [];
    return (
      <section className={style["featured-movies"]}>
        <h3 className={style["title"]}>{type.replace(/_/g, " ")}</h3>
        <ul className={style["container"]}>
          {movies &&
            movies.map((movie) => (
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
  }
};
