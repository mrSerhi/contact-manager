import React, { Component } from "react";
import { Consumer } from "../../context";
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

  handleSubmit = async (e, dispatch) => {
    e.preventDefault();
    const valid = this.validationSubmit(this.state);

    if (valid) {
      const contact = { ...valid };

      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          contact
        );
        dispatch({ type: "ADD_CONTACT", payload: response.data });
      } catch (e) {
        if (e.response) {
          console.log("data:", e.response.data);
          console.log("status:", e.response.status);
        } else if (e.request) {
          console.log("e request:", e.request);
        } else {
          console.log("e:", e.message);
        }
      }

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
