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
        desc="Descripción: Videojuego de rol de acción desarrollado por FromSoftware en colaboración con el escritor George R.R. Martin. El juego se ambienta en un mundo de fantasía oscuro y promete un mundo abierto, una jugabilidad desafiante y una historia épica."
        url="/games/20"
      />
    </BigCard>
  );
}

export default GOTY;
