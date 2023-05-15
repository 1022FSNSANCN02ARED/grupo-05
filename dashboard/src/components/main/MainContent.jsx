import React from "react";
import Stats from "./stats/Stats";
import GameOfTheYear from "./principal/GameOfTheYear";
import Category from "./principal/Category";

const MainContent = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Tablero de Análisis</h1>
      </div>
      <Stats />
      <div className="row">
        <GameOfTheYear />
        <Category />
      </div>
    </div>
  );
};

export default MainContent;
