import React from "react";
import style from "./PagingButtons.module.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export const PagingButtons = ({ currentPage, setCurrentPage, totalPages }) => {
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={style["paging-buttons"]}>
      <button onClick={prevPage} className={style["paging-button"]}>
        <FaAngleLeft className={style['icon']}/>
      </button>
      <div className={style["current-page"]}>
        {currentPage} of {totalPages}
      </div>
      <button onClick={nextPage} className={style["paging-button"]}>
        <FaAngleRight className={style['icon']} />
      </button>
    </div>
  );
};
