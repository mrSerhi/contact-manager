import React, { Component } from "react";
import { Consumer } from "../../context";
// Components
import Contact from "./Contact";

class Contacts extends Component {
  handleDeleteContact = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts, dispatch } = value;
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
          return <div className="container">{items}</div>;
        }}
      </Consumer>
    );
  }
}

export default Contacts;
