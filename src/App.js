import React from "react";
import logo from "./logo.svg";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./component/NotFound/NotFound.js";
import NavBar from "./component/NavBar/NavBar";
import Resume from "./component/Resume/Resume";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
