function GamesSearchResult({ games }) {
  // 1. estoy esperando para hacer una búsqueda; games = null
  if (!games) {
    return "Realizá tu búsqueda!";
  }

  // 2. se realizó la búsqueda y tengo resultados; games = [ con elementos ]
  if (games.length === 0) {
    return "No se encontraron resultados";
  }

  // 3. se realizó la búsqueda y no tengo resultados; games = []
  return (
    <ul className="d-flex flex-wrap">
      {games.map((game) => {
        return (
          <li key={game.id} className="card" style={{ width: "18rem" }}>
            <img src={game.image} alt={`Poster de ${game.name}`} className="card-img-top" />
            <div className="card-body">
              <h2>{game.name}</h2>
              <p>Precio: {game.price}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default GamesSearchResult;
