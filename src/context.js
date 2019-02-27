import React, { Component } from "react";

const Context = React.createContext();

class Provider extends Component {
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
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
export default Provider;
