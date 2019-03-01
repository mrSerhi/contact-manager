import React, { Component } from "react";
import axios from "axios";

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
    contacts: [],
    brand: "Contact Manager",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.setState({ contacts: response.data });
    } catch (e) {
      console.log(e.response.data);
      console.log(e.response.status);
      console.log(e.response.headers);
    }
  }

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
