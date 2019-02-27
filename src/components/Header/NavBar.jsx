import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger py-0 mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          Brand
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
