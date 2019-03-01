import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

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
    ],
    brand: "Contact Manager",
    dispatch: action => this.setState(state => reducer(state, action))
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
