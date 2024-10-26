import React, { useEffect, useState } from "react";
import style from "./Movie.module.css";
import { useParams } from "react-router-dom";
import { getMovieInfo } from "../../services/api";

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => setMovie(await getMovieInfo(id));
    fetchMovie();
  }, [id]);

  return (
    <div className={style["movie-info-page"]}>
      <div className={style["movie-info"]}>
        <div className={style["background"]}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          />
        </div>
        <div className={style["movie-info-container"]}>
          <div className={style["movie-info-left"]}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          </div>
          <div className={style["movie-info-right"]}>
            <h3 className={style["title"]}>{movie.title}</h3>
            <ul className={style["genres"]}>
              {movie.genres && movie.genres.length > 0
                ? movie.genres.map((genre) => (
                    <li className={style['genre']}>{genre.name}</li>
                ))
                : null}
            </ul>
            <p className={style["overview"]}>{movie.overview}</p>
            <span className={style["language"]}>
              <b>Original language:</b> {movie.original_language}
            </span>
            <span className={style["runtime"]}><b>Runtime:</b> {movie.runtime} m</span>
            <span className={style["release-date"]}>
              <b>Release Date:</b> {movie.release_date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
