import React, { useState } from "react";
import "../css/loading.css";
import bgGift from "../utils.js/bg";

const Loading = () => {
  const getRandomElement = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom];
  };
  let backRandom = getRandomElement(bgGift);
  const [bgRandom, setBgRandom] = useState(backRandom);
  const objBgRandom = {
    backgroundImage: bgRandom,
  };

  return (
    <div className="loading">
      <div className="cont__load" style={objBgRandom}>
        <div className="preloader">
          <p>CARGANDO</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
