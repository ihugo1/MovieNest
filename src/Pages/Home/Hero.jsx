import style from "./Hero.module.css";
import React, { useState, useEffect } from "react";
import { useMovieList } from "../../hooks/useMovieList";

export const Hero = () => {
  const { movieList, fetchMovieList } = useMovieList();

  useEffect(() => {
    fetchMovieList({ endpoint: `movie/popular` });
  }, []);

  return (
    <div className={style["hero"]}>
      <div className={style["background"]}>
        {movieList[0] && (
          <img
            src={`https://image.tmdb.org/t/p/original/${movieList[0].backdrop_path}`}
          />
        )}
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
