import style from "./NavBarLinks.module.css";
import { FaFilm, FaCircleUser, FaCircleInfo } from "react-icons/fa6";

export const NavBarLinks = () => {
  const NAVBARLINKS = [
    { name: "catalog", icon: <FaFilm />, to: "/catalog" },
    { name: "profile", icon: <FaCircleUser />, to: "#" },
    { name: "about", icon: <FaCircleInfo />, to: "#" },
  ];

  return (
    <ul className={style["navbar-links"]}>
      {NAVBARLINKS.map((link) => (
        <a className={style["navbar-link"]} href={link.to} key={link.name}>
          <div className={style["icon-container"]}>{link.icon}</div>
          <span className={style["text"]}>{link.name}</span>
        </a>
      ))}
    </ul>
  );
};