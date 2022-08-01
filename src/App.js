import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import Form from "./Form";
import NavBar from "./NavBar";
import "./App.css";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
