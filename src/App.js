import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import HomePage from "./pages/homePage.jsx";
import ProblemPage from "./pages/problemPage.jsx";
import PythonPage from "./pages/pythonPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/problem">
          <ProblemPage />
        </Route>
        <Route path="/python">
          <PythonPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
