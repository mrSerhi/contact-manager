import React, { Component } from "react";
import { Consumer } from "../../context";
// Components
import Contact from "./Contact";

class Contacts extends Component {
  handleGetActive = (email, active) => {
    this.setState(({ contacts }) => {
      const shallCopy = [...contacts];
      const index = shallCopy.findIndex(item => item.email === email);
      shallCopy[index] = { ...shallCopy[index], active };

      return { contacts: shallCopy };
    });
  };

  handleDeleteContact = id => {
    this.setState(({ contacts }) => {
      const shallCopy = [...contacts];
      const filtered = shallCopy.filter(item => item.id !== id);

      return { contacts: filtered };
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          const items = contacts.map(contact => {
            const { id, ...data } = contact;
            return (
              <Contact
                key={id}
                contact={data}
                onActive={this.handleGetActive}
                onDelete={() => this.handleDeleteContact(id)}
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
