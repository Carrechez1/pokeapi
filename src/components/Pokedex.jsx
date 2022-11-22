import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "./pokedex/PokemonCard";
import { setLoading } from "../store/slices/load.slice";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import "../css/pokedex.css";
import Search from "./pokedex/Search";
import SelectType from "./pokedex/SelectType";
import Pagination from "./pokedex/pagination";
const Pokedex = () => {
  /*******************************/
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState();
  const [pokesearch, setPokesearch] = useState();
  const [selectType, setSelectType] = useState("All");
  const [pokeValid, setPokeValid] = useState();
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(20);
  let [offset, setOffset] = useState(20);
  let [offsetRes, setOffsetRes] = useState();
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
      axios
        .get(url)
        .then((res) => {
          // setNext(res.data.next),
          setNext(
            (res.data.next = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
          ),
            setPrevious(
              (res.data.previous = `https://pokeapi.co/api/v2/pokemon/?offset=${offsetRes}&limit=20`)
            ),
            setPokemons(res.data),
            console.log(res.data);
          // const maximo = pokemons.count / porPagina;
        })
        .catch((err) => console.log(err));
    }

    /***************************** */
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, [pokesearch, selectType, url]);

  /*****************************/
  const nameTrainer = useSelector((state) => state.nameTrainer);
  const loading = useSelector((state) => state.loading);
  /************************************************************* */
  //paginacion

  // console.log(maximo);
  /************************************************************* */
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="pokedex">
        <header className="pokedex__header">
          {/* <i className="bx bx-color pokedex__camera"></i>
          <i className="bx bx-radio-circle-marked pokedex__led"></i>
          <i className="bx bxs-circle pokedex__circle1"></i> */}
          <img className="lente" src="lentePokedex.png" alt="" />
          <i className="bx bxs-circle pokedex__circle2 flicker1"></i>
          <i className="bx bxs-circle pokedex__circle3 flicker2"></i>
          <i className="bx bxs-circle pokedex__circle4 flicker3"></i>
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
        <footer className="pokedex__footer">
          <Pagination
            page={page}
            setPage={setPage}
            next={next}
            previous={previous}
            setPrevious={setPrevious}
            setUrl={setUrl}
            offset={offset}
            setOffset={setOffset}
            offsetRes={offsetRes}
            setOffsetRes={setOffsetRes}
            pagesLength={pokemons && Math.ceil(pokemons.count / pokePerPage)}
          />
        </footer>
      </div>
    );
  }
};

export default Pokedex;
