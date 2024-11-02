import React from "react";
import style from "./Button.module.css";

export const Button = ({ text, type, size, icon: Icon, onClick }) => {
  return (
    <button className={`${style[type]} ${style[size]}`} onClick={onClick}>
      {Icon && <Icon className={style["icon"]} />}
      <span className={style["label"]}>{text}</span>
    </button>
  );
};

