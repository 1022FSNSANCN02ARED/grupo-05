import React, { useState, useRef } from "react";
import GamesSearchResult from "./GamesSearchResult.jsx";
import { searchAPI } from "../api/search.js";

function GamesSearch(props) {
  //Formulario o un input, con un botón
  //Lista de resultados

  const [games, setGames] = useState(null);

  const searchInput = useRef();

  async function search() {
    const searchText = searchInput.current.value;
    const foundGames = searchAPI(searchText);
    setGames(foundGames);
  }

  return (
    <>
      <div>
        <input ref={searchInput} type="text" />
        <button onClick={search}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <GamesSearchResult games={games} />
    </>
  );
}

export default GamesSearch;
