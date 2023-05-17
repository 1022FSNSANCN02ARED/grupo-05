import React, { useState, useRef, useEffect } from "react";
import GamesSearchResult from "./GamesSearchResult.jsx";
/* import { searchAPI } from "../api/search.js";
 */
function GamesSearch(props) {
  //Formulario o un input, con un botón
  //Lista de resultados
  const [allGames, setAllGames] = useState([]);
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((result) => {
        setAllGames(result.data);
      });
  }, []);

  const searchInput = useRef();

  function search() {
    const searchText = searchInput.current.value.toLowerCase();

    console.log(searchText);
    /* const foundGames = searchAPI(searchText); */
    const filterGame = allGames.filter((OneGame) => {
      console.log(OneGame.name.toLowerCase().includes(searchText));

      return OneGame.name.toLowerCase().includes(searchText);
    });

    console.log(filterGame);
    setGames(filterGame);
  }

  return (
    <>
      <div>
        <input ref={searchInput} type="text" />
        <button type="button" onClick={search}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <GamesSearchResult games={games} />
    </>
  );
}

export default GamesSearch;
