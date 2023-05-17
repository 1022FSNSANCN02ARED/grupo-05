import React, { useState, useEffect } from "react";
import GameItem from "./GameItem.jsx";
import BigCard from "./BigCard.jsx";
import "../styles/style.css";

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((result) => {
        setGames(result.data);
      });
  }, []);

  return (
    <BigCard title="Games in Data Base">
      <div className="row">
        {games.length === 0 ? (
          <div className="w-100 flex">
            <span className="loader"></span>
          </div>
        ) : (
          games.map((game) => <GameItem key={game.id} id={game.id} name={game.name} image={game.image} />)
        )}
      </div>
    </BigCard>
  );
};

export default GamesList;
