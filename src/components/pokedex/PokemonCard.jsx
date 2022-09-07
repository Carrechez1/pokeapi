import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatsPoke from "./StatsPoke";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);
  let bgImg = pokemon?.types[0].type.name;
  const long = pokemon?.types.length;
  let pokecardState;
  if (long === 1) {
    pokecardState = "type1";
  }
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokedex/${pokemon.name}`);
  };
  /************************************************************** */
  // console.log(pokemon);
  return (
    <article onClick={handleClick} className="pokecard">
      <header className={`pokecard__header pokecardbg__${bgImg}`}>
        <img
          className="pokecard__img"
          src={pokemon?.sprites.other["official-artwork"]["front_default"]}
          alt=""
        />
      </header>
      <section className="pokecard__body">
        <h3 className="pokecard__name">{pokemon?.name}</h3>
        <ul className="pokecard__ul1">
          {pokemon?.types.map((slot) => (
            <li
              className={`pokecard__li1 pokecard__coltipe1__${slot.type.name} pokecard__${pokecardState} `}
              key={slot.type.url}
            >
              {slot.type.name}
            </li>
          ))}
        </ul>
      </section>
      <footer className="pokecard__footer">
        <ul className="pokecard__ul2">
          {pokemon?.stats.map((hab) => (
            <StatsPoke key={hab.stat.url} hab={hab} />
          ))}
        </ul>
      </footer>
    </article>
  );
};

export default PokemonCard;
