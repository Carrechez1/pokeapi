import React from "react";
import "../../css/pagination.css";
const Pagination = ({
  page,
  pagesLength,
  next,
  previous,
  setUrl,
  setPage,
  offset,
  setOffset,
  offsetRes,
  setOffsetRes,
  setPrevious,
}) => {
  const pagesPerBlock = 8;
  const currentBlock = Math.ceil(page / pagesPerBlock);
  const blockLength = Math.ceil(pagesLength / pagesPerBlock);
  const arrPages = [];
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1;
  //initialPage + pagesPerBlock - 1;
  const limitPage =
    blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock;
  for (let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i);
  }
  const plus = () => {
    setUrl(next);
    setOffset(offset + 20);
    setOffsetRes(offset - 20);
    setPage(page + 1);
  };
  const onSpecificPage = (n) => {
    const posit = n * 20;
    const negat = n * 20 - 20;
    setOffsetRes(negat);
    setOffset(posit);
    setUrl(
      ((next = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`),
      (previous = `https://pokeapi.co/api/v2/pokemon/?offset=${offsetRes}&limit=20`))
    );
    setPage(n);
  };
  const res = () => {
    if (offset === 20) {
      setPrevious(null);
    } else {
      setUrl(previous);
      setOffsetRes(offsetRes - 20);
      setOffset(offset - 20);
      setPage(page - 1);
    }
  };
  return (
    <div className="pagination">
      <div className="pagination__prev btn2" onClick={res}>
        return
      </div>
      <ul className="pagination__container">
        {arrPages.map((e) => (
          <li
            className={`pagination__page ${page === e && "pagination__active"}`}
            key={e}
            onClick={() => onSpecificPage(e, setPage(1))}
          >
            {e}
          </li>
        ))}
      </ul>
      <div className="pagination__next btn1" onClick={plus}>
        next
      </div>
    </div>
  );
};

export default Pagination;
