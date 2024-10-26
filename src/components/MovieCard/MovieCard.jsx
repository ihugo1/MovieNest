import React from "react";
import style from "./MovieCard.module.css";
import { FaPlay, FaBookmark } from "react-icons/fa6";
import { Button } from "../Button/Button";

export const MovieCard = ({ id, name, poster_path }) => {
  return (
    <div className={style["movie-card"]}>
      <div className={style["background"]}>
        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
      </div>
      <div className={style["content"]}>
        <span className={style['title']}>{name}</span>
        <div className={style["buttons"]}>
          <Button 
            text="watch" 
            type="primary"
            size={"small"} 
            icon={FaPlay}
          />
          <Button 
            text="save" 
            type="primary"
            size={"small"} 
            icon={FaBookmark}
          />
        </div>
      </div>
    </div>
  );
};
