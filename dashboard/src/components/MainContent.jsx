import React from "react";
import Stats from "./Stats.jsx";
import GameOfTheYear from "./GameOfTheYear.jsx";
import GamesList from "./GamesList.jsx";
import UsersList from "./UsersList.jsx";
import FakeVentas from "../fake/charts/FakeVentas.jsx";

import { Route, Switch } from "react-router-dom";
import Page404 from "../pages/page404.jsx";
import GamesDetail from "./GamesDetails.jsx";
import GamesSearch from "./GamesSearch.jsx";

function MainContent() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/" exact>
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
          <Stats />
          <GameOfTheYear />
          <FakeVentas />
        </Route>
        <Route path="/users" exact={true} component={UsersList} />
        <Route exact path="/games" component={GamesList} />
        <Route path="/games/details/:id" component={GamesDetail} />
        <Route path="/games/search" component={GamesSearch} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default MainContent;

{
  /* <Route path="/games">
          <GamesList />
        </Route>
        <Route path="/games/search" component={GamesSearch} />
        <Route path="/games/:id" component={GamesDetail} /> */
}
