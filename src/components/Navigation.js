import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/random">
          Random
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;