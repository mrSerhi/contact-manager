import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Font-Awesome v5
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faTimes,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDown, faAngleUp, faTimes, faPencilAlt);

class Contact extends Component {
  state = {
    active: false
  };

  handleDisplayDesc = () => {
    this.setState(({ active }) => {
      return { active: !active };
    });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { id, onDelete } = this.props;
    const { active } = this.state;
    const display = active ? (
      <ul className="list-group">
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{phone}</li>
      </ul>
    ) : null;

    return (
      <div className="card card-body mb-3 text-left">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          <div className="card-title-left">
            {name.charAt(0).toUpperCase() + name.slice(1)}
            <button
              onClick={this.handleDisplayDesc}
              className="btn btn-link text-danger p-1 ml-1"
            >
              <FontAwesomeIcon icon={active ? faAngleUp : faAngleDown} />
            </button>
          </div>

          <div className="curd-buttons-block">
            <Link
              to={`/contact/edit/${id}`}
              className="btn btn-link text-danger p-1"
            >
              <FontAwesomeIcon
                icon={faPencilAlt}
                style={{ fontSize: "1.2rem" }}
              />
            </Link>

            <button onClick={onDelete} className="btn btn-link text-muted p-1">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </h5>

        {display}
      </div>
    );
  }
}

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};
