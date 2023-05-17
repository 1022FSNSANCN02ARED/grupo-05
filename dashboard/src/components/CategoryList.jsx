import React, { useState, useEffect } from "react";
import GameItem from "./GameItem.jsx";
import BigCard from "./BigCard.jsx";
import "../styles/style.css";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/category")
      .then((response) => response.json())
      .then((result) => {
        setCategories(result.data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/api/product")
      .then((response) => response.json())
      .then((result) => {
        setGames(result.data);
      });
  }, []);

  return (
    <BigCard title="Categories in Data Base">
      <div className="row">
        {categories.length === 0 ? (
          <div className="w-100 flex">
            <span className="loader"></span>
          </div>
        ) : (
          categories.map((category) => (
            <GameItem key={category.id} id={category.id} name={category.name} url={"/category"} />
          ))
        )}
      </div>
    </BigCard>
  );
};

export default CategoriesList;
