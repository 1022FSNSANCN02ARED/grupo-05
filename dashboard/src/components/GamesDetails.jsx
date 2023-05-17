import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/products/${id}`)
      .then((response) => response.json())
      .then((result) => {
        const game = result.data;
        setGame(game);
      });
  }, [id]);

  if (game) {
    return (
      <div className="card">
        <h1>{game.name}</h1>
        <img src={game.image} alt="" />
        <p>Precio: {game.price}</p>
        <p>Descripción: {game.description}</p>
        <p>Categoría: {game.category}</p>
        <p>Stock: {game.stock}</p>
      </div>
    );
  } else {
    return <p>Cargando...</p>;
  }
};

export default GameDetail;
