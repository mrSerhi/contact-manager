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
  render() {
    const { contacts } = this.state;
    const items = contacts.map(contact => {
      const { id, ...data } = contact;
      return <Contact key={id} contact={data} />;
    });
    return <div className="container">{items}</div>;
  }
}

export default Contacts;
