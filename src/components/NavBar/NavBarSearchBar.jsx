import style from "./NavBarSearchBar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const NavBarSearchBar = () => {
  return (
    <div className={style["searchbar-container"]}>
      <div className={style["searchbar"]}>
        <input className={style["input"]} type="text" placeholder="Search..."/>
        <div className={style["icon-container"]}>
          <FaMagnifyingGlass className={style["icon"]} />
        </div>
      </div>
    </div>
  );
};
