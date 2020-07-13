import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import HomePage from "./pages/homePage.jsx";
import CPPage from "./pages/cpPage.jsx";
import ProblemPage from "./pages/problemPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/problem">
          <ProblemPage />
        </Route>
        <Route path="/cp">
          <CPPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
