import React from "react";

const Navigation = ({ activePage, goToPage, nextPage, prevPage, pages }) => {
  const firstPage = 0;
  const lastPage = pages - 1;
  const isFirstPage = activePage === firstPage;
  const isLastPage = activePage === lastPage;

  const numbersJSX = [...Array(pages).keys()].map(num => (
    <button key={num} onClick={() => goToPage(num)}>
      {num + 1}
    </button>
  ));

  return (
    <div>
      <button disabled={isFirstPage} onClick={() => goToPage(firstPage)}>
        {"<<"}
      </button>
      <button disabled={isFirstPage} onClick={prevPage}>
        {"<"}
      </button>
      {numbersJSX}
      <button disabled={isLastPage} onClick={nextPage}>
        {">"}
      </button>
      <button disabled={isLastPage} onClick={() => goToPage(lastPage)}>
        {">>"}
      </button>
    </div>
  );
};

export default Navigation;
