import style from "./MovieGrid.module.css";
import { MovieCard } from "../../components/MovieCard/MovieCard";

import React from 'react'

export const MovieGrid = ({movies}) => {
  if(!movies){
    return <div>Not results found</div>
  }
  return (
    <div className={style['movie-grid']}>
      {movies.map((movie)=>(
        <MovieCard id={movie.id} name={movie.title} poster_path={movie.poster_path}/>
      ))}
    </div>
  )
}
