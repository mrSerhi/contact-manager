import React, { Component } from "react";
import PropTypes from "prop-types";

// Font-Awesome v5
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDown, faAngleUp);

class Contact extends Component {
  state = {
    active: false
  };

  handleDisplayOption = email => {
    this.setState(({ active }) => {
      return { active: !active };
    });
    this.props.onActive(email, !this.state.active);
  };

  render() {
    const { name, email, phone, active } = this.props.contact;
    const display = active ? (
      <ul className="list-group">
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{phone}</li>
      </ul>
    ) : null;

    return (
      <div className="card card-body mb-3 text-left">
        <h5 className="card-title">
          {name}
          <button
            onClick={() => this.handleDisplayOption(email)}
            className="btn btn-link text-danger p-1 ml-1"
          >
            <FontAwesomeIcon icon={active ? faAngleUp : faAngleDown} />
          </button>
        </h5>
        {display}
      </div>
    );
  }
}

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
