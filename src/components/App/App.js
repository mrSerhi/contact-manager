import React, { Component } from "react";
import "./App.css";

//Components
import NavBar from "../Header/NavBar";
import Contacts from "../Contact/Contacts";
// Global state by Contex API
import Provider from "../../context";

// Font-Awesome v5
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'
// library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <NavBar />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
