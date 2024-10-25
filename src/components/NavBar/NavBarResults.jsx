import style from "./NavBarResults.module.css";

export const NavBarResults = ({ list }) => {
  const getYearFromDate = (date) => date.split("-")[0];
  return (
    <ul className={style["searchbar-results"]}>
      {list && list.length > 0
        ? list.map((movie) => (
            <a key={movie.id} className={style["searchbar-result"]}>
              <img
                className={style["poster"]}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              />
              <div className={style["details"]}>
                <span className={style["title"]}>{movie.title}</span>
                <span className={style["date"]}>
                  <span className={style["date"]}>
                    ({getYearFromDate(movie.release_date)})
                  </span>
                </span>
              </div>
            </a>
          ))
        : null}
    </ul>
  );
};
