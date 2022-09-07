import React from "react";
import Form from "./Form";
import "../css/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__cont">
        <div className="home__cont__inf item">
          <h1 className="home__title item">Hi Trainer</h1>
          <p className="home__mesaje item">
            <strong>To Star give me your trainer name</strong>
          </p>
        </div>
        <div className="home__cont__img item">
          <img className="home__img item1" src="/img/poke2.png" alt="" />
          <img className="home__flecha item1" src="/img/flech.png" alt="" />
        </div>

        <div className=" form__container item">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
