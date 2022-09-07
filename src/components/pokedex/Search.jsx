import React from "react";
import { useForm } from "react-hook-form";

const Search = ({ setPokesearch, setSelectType }) => {
  const { handleSubmit, register } = useForm();
  const submit = (data) => {
    const cont = data.name.trim().toLowerCase();
    setPokesearch(cont);
    setSelectType("All");
  };
  return (
    <form className="pokedex__search" onSubmit={handleSubmit(submit)}>
      <input
        className="pokedex__input"
        {...register("name")}
        id="name"
        type="text"
      />
      <button className="pokedex__button">Busdar</button>
    </form>
  );
};

export default Search;
