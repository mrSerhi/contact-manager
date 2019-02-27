import React, { Component } from "react";

// Components
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: "flglkk33",
        name: "Elizabet",
        email: "elli@gmail.com",
        phone: "555-34-123"
      },
      {
        id: "fffdff3003",
        name: "Dilan",
        email: "dilan@gmail.com",
        phone: "444-123-123"
      },
      {
        id: "40404399bbb",
        name: "Bill",
        email: "bill@gmail.com",
        phone: "128-4-5543"
      }
    ]
  };

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
    const { contacts } = this.state;
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
  }
}

export default Contacts;
