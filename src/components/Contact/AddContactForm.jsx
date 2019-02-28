import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";

class AddContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e, dispatch) => {
    e.preventDefault();

    const contact = { id: uuid(), ...this.state };
    dispatch({ type: "ADD_CONTACT", payload: contact });

    this.setState({ name: "", email: "", phone: "" });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {contex => {
          const { dispatch } = contex;

          return (
            <div className="card w-50 mx-auto mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form
                  onSubmit={e => this.handleSubmit(e, dispatch)}
                  name="add-contact"
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      Name <span className="input-require text-danger">*</span>
                    </label>
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span className="input-require text-danger">*</span>
                    </label>
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={email}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      name="phone"
                      placeholder="Enter Phone"
                      value={phone}
                    />
                  </div>

                  <input
                    className="btn btn-light"
                    type="submit"
                    value="Add Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContactForm;
