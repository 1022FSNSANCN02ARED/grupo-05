import React, { useState, useEffect } from "react";
import GameItem from "./GameItem.jsx";
import BigCard from "./BigCard.jsx";
import { useParams } from "react-router-dom";

import "../styles/style.css";

const CategoryGame = () => {
  const [games, setGames] = useState([]);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((result) => {
        const newList = result.data.filter((game) => {
          return game.categoryId == id;
        });

        setGames(newList);
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
          games.map((game) => (
            <GameItem key={game.id} id={game.id} name={game.name} image={game.image} url={"/games"} />
          ))
        )}
      </div>
    </BigCard>
  );
};

export default CategoryGame;
