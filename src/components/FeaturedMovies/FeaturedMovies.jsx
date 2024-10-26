import React from "react";
import style from "./FeaturedMovies.module.css";
import { useEffect, useState } from "react";
import { getPopularMovies, getTopRatedMovies } from "../../services/api";
import { MovieCard } from "../MovieCard/MovieCard";
import { FaFilm, FaCircleUser, FaCircleInfo } from "react-icons/fa6";

export const FeaturedMovies = ({ type }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      if (type === "popular") {
        setMovies((await getPopularMovies()).slice(0, 4));
      } else if (type === "top rated") {
        setMovies((await getTopRatedMovies()).slice(0, 4));
      }
    };
    fetchMovie();
  }, []);

  return (
    <section className={style["featured-movies"]}>
      <h3 className={style['title']}>{type}</h3>
      <ul className={style['container']}>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              name={movie.title}
              poster_path={movie.poster_path}
            />
          ))
        ) : (
          <span>Loading...</span>
        )}
      </ul>
    </section>
  );
};
