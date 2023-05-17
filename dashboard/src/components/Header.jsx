import React from "react";

import avatar from "../img/default-avatar.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand bg-NPC topbar mb-4 static-top shadow">
      <div className="nav-item">
        <Link className="nav-link links-NPC" to="/games/search">
          <i className="fas fa-fw fa-search"></i>
          <span>Game Search</span>
        </Link>
      </div>

      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
            <span className="mr-2 d-none d-lg-inline links-NPC small">Pepitoooo</span>
            <img
              className="img-profile rounded-circle shadow"
              src={avatar}
              alt="Pepitooo - Creador de React"
              width="60"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
