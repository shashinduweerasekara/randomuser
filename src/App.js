import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NameList from "./components/pages/nameList/NameList";
import HeaderBar from "./components/headerBar/HeaderBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/namelist">
            <NameList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
