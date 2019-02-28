import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ name, type, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="text-capitalize">
        {name}
      </label>
      <input
        onChange={onChange}
        className="form-control"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

FormGroup.defaultProps = {
  type: "text"
};

FormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormGroup;
