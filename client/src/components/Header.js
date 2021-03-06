import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import Admin from "./Admin";

class Header extends Component {
  render() {
    return (
      <Router>
        <header>
          <nav>
            <ul>
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/blog">
                Blog
              </Link>
              <Link className="link" to="/admin">
                Admin
              </Link>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Header;
