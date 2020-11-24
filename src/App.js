import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, NavDropdown } from "react-bootstrap";
import Shopinglist from "./Components/shopinglist";
import CreateItem from "./Components/createItem";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <ul title="Dropdown" className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              List
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Create Item
            </Link>
          </li>
        </ul>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Shopinglist} />
        <Route exact path="/create" component={CreateItem} />
      </Switch>
    </div>
  );
};

export default App;
