import React from 'react';
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./index.css";

function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            <Link to='/meet'>meet</Link>
          </li>
          <li>
            <Link to='/know'>know</Link>
          </li>
          <li>
            <Link to='/love'>love</Link>
          </li>
          <li>
            <Link to='/forget'>leave</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Index;
