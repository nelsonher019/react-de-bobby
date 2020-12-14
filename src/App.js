import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Upload from "./components/Upload";

function App() {
  return (
    <Fragment>
      <div className="box-shawdow">
        <Router>
          <Search />
          <Navbar />
          <Switch>
            <Route path="/upload">
              <Upload />
            </Route>
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
