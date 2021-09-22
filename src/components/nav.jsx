import React from "react";
const NavBar = ({ counters }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <h1 className="navbar-brand">
        NavBar
        <span className="badge badge-pill bg-light text-dark m-2">
          {counters.length}
        </span>
      </h1>
    </nav>
  );
};

export default NavBar;
