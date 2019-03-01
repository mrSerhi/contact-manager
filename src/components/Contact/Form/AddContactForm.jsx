import React, { Component } from "react";
import { Consumer } from "../../../context";
import axios from "axios";

// Components
import FormGroup from "../Form/FormGroup";

class AddContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validationSubmit = state => {
    const { name, email, phone } = state;

    if (name === "") {
      this.setState({ errors: { name: "name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "phone is required" } });
      return;
    } else if (phone.length <= 5) {
      this.setState({ errors: { phone: "a phone number should be > 5" } });
      return;
    }

    return { name, email, phone };
  };

  handleSubmit = (e, dispatch) => {
    e.preventDefault();
    const valid = this.validationSubmit(this.state);

    if (valid) {
      const contact = { ...valid };
      axios
        .post("https://jsonplaceholder.typicode.com/users", contact)
        .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }))
        .catch(error => {
          if (error.response) {
            console.log("data:", error.response.data);
            console.log("status:", error.response.status);
          } else if (error.request) {
            console.log("error request:", error.request);
          } else {
            console.log("Error:", error.message);
          }
          console.log("error config:", error.config);
        });

      // reset inputs values
      this.setState({ name: "", email: "", phone: "", errors: {} });
      this.props.history.push("/"); // redirecting to the home page
    }
    return;
  };

  render() {
    const { name, email, phone, errors } = this.state;

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
                  <FormGroup
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.handleChange}
                    error={errors.name}
                  />
                  <FormGroup
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.handleChange}
                    error={errors.email}
                  />
                  <FormGroup
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.handleChange}
                    error={errors.phone}
                  />
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
