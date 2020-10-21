import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function Header() {
  return (
    <div>
    <Router>
    <Switch>
          {/* <Route exact path="/" component={Header}/> */}
            </Switch>
    </Router>
      <header className="head">
        <h1>Bean love bear<FontAwesomeIcon icon={faBeer} color='#f28e1c'></FontAwesomeIcon></h1>
        <p>Home</p>
        <p>Favourites</p>
      </header>
    </div>
  );
}
export default Header;
