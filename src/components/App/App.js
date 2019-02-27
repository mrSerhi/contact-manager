import React, { Component } from "react";
import "./App.css";

//Components
import NavBar from "../Header/NavBar";
import Contact from "../Contact/Contact";

// Font-Awesome v5
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'
// library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Contact />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
