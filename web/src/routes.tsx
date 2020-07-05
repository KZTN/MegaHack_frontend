import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Initial from "./pages/initial";
import Login from "./pages/login";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Favorites from "./pages/favorites";
import Notifications from "./pages/Notifications";
import Order from "./pages/order";
import StabPost from "./pages/stabpost";
import StabHistory from "./pages/stabhistory";
import StabOrder from "./pages/staborder";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Initial} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Home} path="/home" />
      <Route component={Profile} path="/profile" />
      <Route component={Favorites} path="/favorites" />
      <Route component={Notifications} path="/notifications" />
      <Route component={Order} path="/orders" />
      <Route component={StabPost} path="/posts" />
      <Route component={StabHistory} path="/history" />      
      <Route component={StabOrder} path="/staborders" />
    </BrowserRouter>
  );
};

export default Routes;
