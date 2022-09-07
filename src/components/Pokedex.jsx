import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "./pokedex/PokemonCard";
import { setLoading } from "../store/slices/load.slice";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import "../css/pokedex.css";
import Search from "./pokedex/Search";
import SelectType from "./pokedex/SelectType";
const Pokedex = () => {
  /*******************************/
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState();
  const [pokesearch, setPokesearch] = useState();
  const [selectType, setSelectType] = useState("All");
  const [pokeValid, setPokeValid] = useState();
  /*******************************/
  useEffect(() => {
    if (selectType !== "All") {
      const URL = `https://pokeapi.co/api/v2/type/${selectType}/`;
      axios
        .get(URL)
        .then((res) => {
          const arr = res.data.pokemon.map((e) => e.pokemon);
          setPokemons({ results: arr });
        })
        .catch((err) => console.log(err));
    } else if (pokesearch) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokesearch}`;
      const obj = {
        results: [
          {
            url,
          },
        ],
      };
      setPokemons(obj);
    } else {
      const URL = "https://pokeapi.co/api/v2/pokemon/";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data))
        .catch((err) => console.log(err));
    }

    /***************************** */
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, [pokesearch, selectType]);

  /*****************************/
  const nameTrainer = useSelector((state) => state.nameTrainer);
  const loading = useSelector((state) => state.loading);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="pokedex">
        <header className="pokedex__header">
          <i className="bx bx-color pokedex__camera"></i>
          <i className="bx bx-radio-circle-marked pokedex__led"></i>
          <i className="bx bxs-circle pokedex__circle1"></i>
          <i className="bx bxs-circle pokedex__circle2"></i>
          <i className="bx bxs-circle pokedex__circle3"></i>
          <i className="bx bxs-circle pokedex__circle4"></i>
          <img className="header__img" src="/img/pokedex.png" alt="" />

          <div className="pokedex__search">
            <Search
              pokemons={pokemons}
              setSelectType={setSelectType}
              setPokesearch={setPokesearch}
            />
          </div>
          <div className="pokedex__select">
            <SelectType
              setPokesearch={setPokesearch}
              selectType={selectType}
              setSelectType={setSelectType}
            />
          </div>
        </header>
        <h1 className="pokedex__nametrainer">{`Welcome ${nameTrainer}`}</h1>
        <div className="pokecards__container">
          {pokemons?.results.map((pokemon) => (
            <PokemonCard key={pokemon.url} url={pokemon.url} />
          ))}
        </div>
        <footer className="pokedex__footer"></footer>
      </div>
    );
  }
};

export default Pokedex;
