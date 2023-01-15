const path = require("path");

let productos = [
  {
    nombre: "Cafetera Moulinex",
    oferta: "40% OFF",
    precio: 6770,
    img: "./imgs/productos/img-cafetera-moulinex.jpg",
    alt: "cafetera-moulinex",
  },
  {
    nombre: "MacBook Pro 2019",
    oferta: "20% off",
    precio: 230000,
    img: "./imgs/productos/img-macbook-pro-2019.jpg",
    alt: "macbook-pro-2019",
  },
  {
    nombre: "Samsung Galaxy S10",
    oferta: "10% OFF",
    precio: 70500,
    img: "./imgs/productos/img-samsung-galaxy-s10.jpg",
    alt: "samsung-galaxy-s10",
  },
  {
    nombre: "SmartTv Samsung",
    oferta: "5% OFF",
    precio: 230000,
    img: "./imgs/productos/img-tv-samsung-smart.jpg",
    alt: "tv-samsung-smart",
  },
];


module.exports = {
  home: (req, res) => {
    res.render("index", { productos });
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/register");
  },
};
