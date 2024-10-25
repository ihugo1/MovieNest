import style from "./Home.module.css";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div className={style["home-page"]}>
      <Hero />
    </div>
  );
};



