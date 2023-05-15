import React from "react";
import SmallCard from "./components/SmallCard";

const myStats = [
  {
    id: 2,
    title: "Juegos Disponibles",
    value: "21",
    icon: "fa-film",
    color: "primary",
  },
  {
    id: 1,
    title: "Ventas",
    value: "49",
    icon: "fa-award",
    color: "success",
  },
  {
    id: 3,
    title: "Usuarios",
    value: "49",
    icon: "fa-user",
    color: "warning",
  },
];

const Stats = () => {
  return (
    <div className="row">
      {myStats.map((stat, i) => {
        return <SmallCard key={stat.id} {...stat} />;
      })}
    </div>
  );
};

export default Stats;
