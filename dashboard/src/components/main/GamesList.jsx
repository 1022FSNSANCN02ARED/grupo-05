import React, { Component } from "react";
import { Link } from "react-router-dom";

class GamesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    this.fetchAllGames();
  }

  fetchAllGames() {
    fetch("http://localhost:3001/api/products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          games: result.data,
        });
        console.log("[MOVIES LIST] Cambió el estado");
      });
  }

  deleteGame(game) {
    fetch("http://localhost:3001/api/products/delete/" + game.id, {
      method: "delete",
    }).then(() => {
      this.fetchAllGames();
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
          </tr>
        </thead>
        <tbody>
          {this.state.games.map((game) => {
            return (
              <tr key={game.id}>
                <th>{game.id}</th>
                <th>{game.title}</th>

                <th>
                  <Link to={`/games/${game.id}`}>
                    <button className="btn text-success">
                      <i className="fas fa-eye"></i>
                    </button>
                  </Link>
                  <button className="btn text-danger" onClick={() => this.deleteGame(game)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default GamesList;
