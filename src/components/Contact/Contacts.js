import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
// Components
import Contact from "./Contact";

class Contacts extends Component {
  handleDeleteContact = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }))
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
  };

  render() {
    return (
      <Consumer>
        {context => {
          const { contacts, dispatch } = context;
          const items = contacts.map(contact => {
            const { id, ...data } = contact;
            return (
              <Contact
                key={id}
                contact={data}
                onDelete={() => this.handleDeleteContact(id, dispatch)}
              />
            );
          });
          return (
            <div className="container">
              <h1 className="display-3 text-center mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {items}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
