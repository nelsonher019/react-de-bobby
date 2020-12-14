import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <Fragment>
      <div className="box-shawdow">
        <Search />
        <Navbar />
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
