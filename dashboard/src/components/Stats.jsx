import React from "react";
import SmallCard from "./SmallCard.jsx";

const myStats = [
  {
    id: 2,
    title: "Total de Usuarios",
    value: "21",
    color: "red",
    icon: "fa-users",
  },
  {
    id: 3,
    title: "Juegos Disponibles",
    value: "49",
    color: "blue",
    icon: "fa-gamepad",
  },
  {
    id: 1,
    title: "Categorías",
    value: "79",
    color: "green",
    icon: "fa-award",
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
