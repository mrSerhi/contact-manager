import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import NavBar from "../Header/NavBar";
import Contacts from "../Contact/Contacts";
import AddContactForm from "../Form/AddContactForm";
import EditContactForm from "../EditContact/EditContactForm";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";

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
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContactForm} />
              <Route
                exact
                path="/contact/edit/:id"
                component={EditContactForm}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
