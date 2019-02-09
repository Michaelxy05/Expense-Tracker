import React from "react";
import "./style.css";

function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Expense Tracking 
      </a>
      {/* Needs To render its own page here instead of render at the bottom */}
      {/* target="" can be a placeholder for where to modify */}
      <a className="navbar-brand" href="/Expenses" target="_blank">
        Refresh
      </a>
      <a className="navbar-brand" href="/Detail">
        Detail 
      </a>
      <a className="navbar-brand" href="/Spent" target="_blank">
        List of my Expenses 
      </a>
    </nav>
  );
}

export default Nav;
