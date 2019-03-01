import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

// Font-Awesome v5
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faQuestion } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faPlus, faQuestion);

const NavBar = () => {
  return (
    <Consumer>
      {context => {
        return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-danger py-0 mb-3">
            <div className="container">
              <a href="/" className="navbar-brand">
                {context.brand}
              </a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <FontAwesomeIcon icon={faHome} /> {""}
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact/add" className="nav-link">
                    <FontAwesomeIcon icon={faPlus} /> {""}
                    Add Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    <FontAwesomeIcon icon={faQuestion} /> {""}
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        );
      }}
    </Consumer>
  );
};
export default NavBar;
