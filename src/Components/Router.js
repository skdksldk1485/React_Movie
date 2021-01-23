import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Playing from "../Pages/Playing";
import Popular from "../Pages/Popular";
import Upcoming from "../Pages/Upcoming";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Playing} />
        <Route path="/Popular" exact component={Popular} />
        <Route path="/Upcoming" exact component={Upcoming} />
      </Switch>
    </>
  </Router>
);
