import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const FormGroup = ({ name, type, placeholder, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="text-capitalize">
        {name}
      </label>
      <input
        onChange={onChange}
        className={classnames("form-control", { "is-invalid": error })}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
      />
      {error && <div className="invalid-feedback">{error}</div>}
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
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default FormGroup;
