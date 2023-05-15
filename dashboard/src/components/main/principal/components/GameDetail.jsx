import React from "react";

const GameDetail = ({ title, img, desc, url }) => {
  return (
    <>
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "40rem" }}
          src={img}
          alt={title} /* " Elden Ring - Juego del año " */
        />
      </div>
      <p>{desc}</p>
      <a className="btn btn-danger" target="_blank" rel="noreferrer" href={url}>
        Ver Juego del Año
      </a>
    </>
  );
};

export default GameDetail;
