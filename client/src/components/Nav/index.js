import React from "react";
import "./style.css";

function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Expense Tracking 
      </a>
      <a className="navbar-brand" href="/Expenses">
        List of my Expenses 
      </a>
      <a className="navbar-brand" href="/List">
        Detail 
      </a>
    </nav>
  );
}

export default Nav;
