import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Initial from "./pages/initial";
import Login from "./pages/login";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Favorite from "./pages/favorite";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Initial} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Home} path="/home" />
      <Route component={Profile} path="/profile" />
      <Route component={Favorite} path="/favorite" />
    </BrowserRouter>
  );
};

export default Routes;
