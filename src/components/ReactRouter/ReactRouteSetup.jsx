import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../PropTypes";
import ControlledInputs from "../Form/ControlledInputs";
import ErrorPage from "./ErrorPage";
import About from "../../About";
import UseContext from "../ContextApi/UseContext";
import ShowHide from "../short-Circuit/ShowHide";

function ReactRouteSetup() {
  return (
    <Router>
      <About />

      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/form">
          <ControlledInputs />
        </Route>
        <Route path="/contextapi">
          <UseContext />
        </Route>
        <Route path="/short-circuit">
          <ShowHide />
        </Route>

        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default ReactRouteSetup;
