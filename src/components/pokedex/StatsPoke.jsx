import React from "react";

const StatsPoke = ({ hab }) => {
  return (
    <li className={`pokecard__li2 pokecard__${hab.stat.name}`}>
      <h4 className="pokecard__tithab">{hab.stat.name}</h4>

      <p>{hab["base_stat"]}</p>
    </li>
  );
};

export default StatsPoke;
