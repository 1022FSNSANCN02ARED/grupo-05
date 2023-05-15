import React, { Component } from "react";

class GameDetail extends Component {
  constructor(props) {
    super(props);

    const id = props.match.params.id;
    console.log("Match:", props.match);

    this.state = {
      id,
      game: null,
    };
  }

  componentDidMount() {
    const id = this.state.id;

    fetch(`http://localhost:3001/api/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const game = result.data;
        this.setState({
          id,
          game,
        });
      });
  }

  render() {
    const game = this.state.game;
    if (game) {
      //tengo game
      return (
        <>
          <h1>{game.title}</h1>
          <p>Genre: {game.genre.name}</p>
        </>
      );
    } else {
      //No tengo game todavía
      return <p>Cargando...</p>;
    }
  }
}

export default GameDetail;
