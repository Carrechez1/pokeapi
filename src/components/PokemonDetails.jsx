import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/pokeDetails.css";
import DetailsMoves from "./pokedetails/DetailsMoves";
import DetailStats from "./pokedetails/DetailStats";
import Paginaciondetails from "./pokedetails/Paginaciondetails";

/****************************** */
const PokemonDetails = () => {
  /***************************** */
  const [pokeInfo, setPokeInfo] = useState();
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(6);
  /************************************* */
  const { name } = useParams();

  /*********************************** */
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    axios
      .get(URL)
      .then((res) => setPokeInfo(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(pokeInfo);
  const maximo = Math.ceil(pokeInfo?.moves.length / porPagina);
  const long = pokeInfo?.types.length;
  let poketypee;
  if (long === 1) {
    poketypee = "type1";
  }
  /**************************** */
  return (
    <div className={`details`}>
      <header className="details__header">
        <i className="bx bx-color details__camera"></i>
        <i className="bx bx-radio-circle-marked details__led"></i>
        <i className="bx bxs-circle details__circle1"></i>
        <i className="bx bxs-circle details__circle2"></i>
        <i className="bx bxs-circle details__circle3"></i>
        <i className="bx bxs-circle details__circle4"></i>
        <img className="details__headerimg" src="/img/pokedex.png" alt="" />
      </header>
      <div className="details__pokeinfo">
        <img
          className="details__img"
          src={pokeInfo?.sprites.other["official-artwork"]["front_default"]}
          alt=""
        />
        <h1 className="details__title">{pokeInfo?.name}</h1>
        <ul className="details__type">
          {pokeInfo?.types.map((poketype) => (
            <li
              className={`pokecard__li1 pokecard__coltipe1__${poketype.type.name} pokecard__${poketypee} `}
              key={poketype.type.url}
            >
              {poketype.type.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="details__stats">
        <h2 className="details__stats__title">
          <strong>Stats</strong>
        </h2>
        <ul className="details__ul1">
          {pokeInfo?.stats.map((hab) => (
            <DetailStats key={hab.stat.url} hab={hab} />
          ))}
        </ul>
      </div>
      <div className="details__move">
        <h2 className="details__titmoves">Moves {pokeInfo?.name}</h2>
        <ul className="details__ul2">
          {pokeInfo?.moves
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((mov) => (
              <DetailsMoves key={mov.move.url} mov={mov} />
            ))}
        </ul>
      </div>
      <Paginaciondetails
        pagina={pagina}
        setPagina={setPagina}
        maximo={maximo}
      />
      <footer className="footer"></footer>
    </div>
  );
};

export default PokemonDetails;
