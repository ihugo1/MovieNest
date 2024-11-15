import style from "./MovieInfo.module.css";

export const MovieInfo = ({ movie }) => {
  return (
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
                  <li key={genre.name} className={style["genre"]}>{genre.name}</li>
                ))
              : null}
          </ul>
          <p className={style["overview"]}>{movie.overview}</p>
          <span className={style["language"]}>
            <b>Original language:</b> {movie.original_language}
          </span>
          <span className={style["runtime"]}>
            <b>Runtime:</b> {movie.runtime} m
          </span>
          <span className={style["release-date"]}>
            <b>Release Date:</b> {movie.release_date}
          </span>
        </div>
      </div>
    </div>
  );
};
