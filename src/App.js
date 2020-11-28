import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import Shopinglist from "./Components/shopinglist";
import CreateItem from "./Components/createItem";
import "./App.css";

const App = () => {
  return (
    <div>
      <Dropdown title="Dropdown" menuAlign="right">
        <DropdownButton
          variant="dark"
          title={FiMenu}
          menuAlign="right"
          className="btn"
        >
          <Dropdown.Item eventKey="1">
            <Link to="/">List</Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <Link to="/create">Create Item</Link>
          </Dropdown.Item>
        </DropdownButton>
      </Dropdown>
      <Switch>
        <Route exact path="/" component={Shopinglist} />
        <Route exact path="/create" component={CreateItem} />
      </Switch>
    </div>
  );
};

export default App;
