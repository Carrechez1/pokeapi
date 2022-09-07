import axios from "axios";
import React, { useEffect, useState } from "react";

const SelectType = ({ setSelectType, selectType, setPokesearch }) => {
  /************************ */
  const [listTypes, setListTypes] = useState();
  /********************* */
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/type/`;
    axios
      .get(URL)
      .then((res) => setListTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  /*************************** */
  const handleChange = (e) => {
    setSelectType(e.target.value);
    setPokesearch("");
  };
  return (
    <select value={selectType} onChange={handleChange}>
      <option value="All">select All</option>
      {listTypes?.map((type) => (
        <option key={type.name} value={type.name}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectType;
