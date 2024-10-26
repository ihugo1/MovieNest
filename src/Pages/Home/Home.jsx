import style from "./Home.module.css";
import { Hero } from "./Hero";
import { FeaturedMovies } from "../../components/FeaturedMovies/FeaturedMovies";

export const Home = () => {

  return (
    <div className={style["home-page"]}>
      <Hero />
      <FeaturedMovies type="popular"/>
      <FeaturedMovies type="top rated"/>
    </div>
  );
};



