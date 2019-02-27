import React from "react";
import PropTypes from "prop-types";

const Contact = ({ contact }) => {
  const { name, email, phone } = contact;
  return (
    <div className="card card-body mb-3 text-left">
      <h3 className="card-title">{name}</h3>
      <ul className="list-group">
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{phone}</li>
      </ul>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
