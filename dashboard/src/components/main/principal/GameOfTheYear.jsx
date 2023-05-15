import React from "react";
import GameOfTheYearImg from "../../../img/products/elden-ring.jpg";
import BigCard from "./components/BigCard";
import GameDetail from "./components/GameDetail";

const GameOfTheYear = () => {
  return (
    <BigCard title="Juego del Año">
      <GameDetail
        img={GameOfTheYearImg}
        title={" Elden Ring - Juego del año"}
        desc={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, corrupti unde sapiente in tenetur vero culpa facilis hic beatae, laboriosam cum quidem esse optio error aliquid nam facere id nemo?"
        }
        url="/"
      />
    </BigCard>
  );
};

export default GameOfTheYear;
