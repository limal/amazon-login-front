import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./Home";

export const App = () => {
  return (
    <Router>
      <div>
        <h1>Test web app</h1>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};
