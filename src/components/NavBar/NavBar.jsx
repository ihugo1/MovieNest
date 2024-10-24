import React from "react";
import style from "./NavBar.module.css";
import { NavBarSearchBar } from "./NavBarSearchBar";
import { NavBarLinks } from "./NavBarLinks";

export const NavBar = () => {
  return (
    <nav className={style["navbar"]}>
      <div className={style["navbar-left"]}>
        <a className={style["logo"]}>
          <span className={style["part-a"]}>Movie</span>
          <span className={style["part-b"]}>Nest</span>
        </a>
      </div>
      <div className={style["navbar-middle"]}>
        <NavBarSearchBar />
      </div>
      <div className={style["navbar-right"]}>
        <NavBarLinks />
      </div>
    </nav>
  );
};
