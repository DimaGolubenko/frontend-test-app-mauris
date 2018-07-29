import React from "react";

const Navigation = ({ activePage, goToPage, nextPage, prevPage, pages }) => {
  const firstPage = 0;
  const lastPage = pages - 1;
  const isFirstPage = activePage === firstPage;
  const isLastPage = activePage === lastPage;

  const numbersJSX = [...Array(pages).keys()].map(num => (
    <button
      className="page-navigation__btn"
      key={num}
      onClick={() => goToPage(num)}
    >
      {num + 1}
    </button>
  ));

  return (
    <div className="page-navigation">
      <button
        className="page-navigation__btn"
        disabled={isFirstPage}
        onClick={() => goToPage(firstPage)}
      >
        {"<<"}
      </button>
      <button
        className="page-navigation__btn"
        disabled={isFirstPage}
        onClick={prevPage}
      >
        {"<"}
      </button>
      <span className="page-navigation__numbers">{numbersJSX}</span>
      <button
        className="page-navigation__btn"
        disabled={isLastPage}
        onClick={nextPage}
      >
        {">"}
      </button>
      <button
        className="page-navigation__btn"
        disabled={isLastPage}
        onClick={() => goToPage(lastPage)}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Navigation;
