import React from "react";
import logoNPC from "../img/logoCorto.png";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="navbar-nav bg-NPC-dark sidebar sidebar-dark accordion" id="accordionSidebar">
      <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon">
          <img className="w-100 pt-5" src={logoNPC} alt="NPC Games" />
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link pt-5" to="/">
          <span></span>
        </Link>
      </li>

      <li className="nav-item ">
        <Link className="border-NPC nav-link" to="/games">
          <i className="font-size-NPC fas fa-fw fa-folder "></i>
          <span>Todos Los Juegos</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="border-NPC nav-link" to="/users">
          <i className="font-size-NPC fas fa-fw fa-user"></i>
          <span>Usuarios</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="border-NPC nav-link" to="/stats">
          <i className="font-size-NPC fas fa-fw fa-chart-area"></i>
          <span>Métricas</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
