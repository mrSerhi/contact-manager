import React, { Component } from "react";

class AddContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card w-50 mx-auto mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form name="add-contact">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
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
  }
}

export default AddContactForm;
