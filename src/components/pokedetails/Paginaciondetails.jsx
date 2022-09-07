import React, { useState } from "react";

const Paginaciondetails = ({ pagina, setPagina, maximo }) => {
  const [number, setNumber] = useState(1);
  const nextPage = () => {
    if (number + 1 <= maximo) {
      setNumber(number + 1);
      setPagina(pagina + 1);
    }
  };
  const previusPage = () => {
    if (number > 1) {
      setNumber(number - 1);
      setPagina(pagina - 1);
    }
  };
  return (
    <div className="details__paginacion">
      <button onClick={previusPage} className="details__next">
        next
      </button>
      <div className="details__paginacioninfo">
        <p> {number} </p>
        <p> / </p>
        <p>{maximo}</p>
      </div>

      <button className="details__previus" onClick={nextPage}>
        previus
      </button>
    </div>
  );
};

export default Paginaciondetails;
