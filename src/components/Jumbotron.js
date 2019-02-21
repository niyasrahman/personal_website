import React from "react";
import Image from "./image";
import "./jumbotron.scss";
const Jumbotron = ({ data }) => {
  return (
    <div className="jumbotron">
      <div className="jumbotron__container">
        <div className="jumbotron__img">
          <Image />
        </div>
        <h1 className="jumbotron__name">{data.title}</h1>
        <p className="jumbotron__para">{data.text}</p>
      </div>
    </div>
  );
};

export default Jumbotron;
