import React from "react";
import BigCard from "./BigCard.jsx";
import imgGOTY from "../img/products/elden-ring.jpg";
import GameAbstract from "./GameAbstract.jsx";

function GOTY() {
  return (
    <BigCard title="Juego del Año">
      <GameAbstract
        img={imgGOTY}
        title="Elden Ring"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        consequatur explicabo officia inventore libero veritatis iure voluptate
        reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem
        culpa citationem ratione aperiam voluptatum non corporis ratione aperiam
        voluptatum quae dolorem culpa ratione aperiam voluptatum?"
        url="/"
      />
    </BigCard>
  );
}

export default GOTY;
