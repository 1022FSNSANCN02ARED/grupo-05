import React from "react";
import { Link } from "react-router-dom";

function GameItem({ id, name, image }) {
  return (
    <div className="col-lg-3 mb-4">
      <div className="card bg-dark text-white shadow">
        <Link to={`/products/${id}`} className="max-h-NPC text-white">
          <div className="card-body">
            <span className="mb-1">{name}</span>
            <img src={image} alt="" className="w-100" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GameItem;
