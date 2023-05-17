import React from "react";
import SmallCard from "./SmallCard.jsx";

const myStats = [
  {
    id: 2,
    title: "Total de Usuarios",
    value: "21",
    color: "red",
    icon: "fa-users",
    url: "/users",
  },
  {
    id: 3,
    title: "Juegos Disponibles",
    value: "49",
    color: "blue",
    icon: "fa-gamepad",
    url: "/games",
  },
  {
    id: 1,
    title: "Categorías",
    value: "79",
    color: "green",
    icon: "fa-folder-open",
    url: "/category",
  },
];

function Stats() {
  return (
    <div className="row flex-wrap">
      {myStats.map((stat) => {
        return <SmallCard key={stat.id} {...stat} />;
      })}
    </div>
  );
}

export default Stats;
