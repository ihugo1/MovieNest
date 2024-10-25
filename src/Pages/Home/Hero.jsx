import style from "./Hero.module.css";
import React, { useState, useEffect } from "react";
import { getPopularMovies } from "../../services/api";

export const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => setMovie((await getPopularMovies())[0]);
    fetchMovie();
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div className={style["hero"]}>
      <div className={style["background"]}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        />
      </div>
      <div className={style["content"]}>
        <p className={style["title"]}>Explore a World of Movies</p>
        <p className={style["subtitle"]}>
          All the trending movies in one place
        </p>
      </div>
    </div>
  );
};
