import React, { Component } from "react";
import "./App.css";
import UserOutput from "./components/UserOutput";
import UserInput from "./components/UserInput";

class App extends Component {
  state = {
    username: "The Strongest Avenger",
  };

  usernameChangedHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>
            UserInput should hold an Input element, UserOutput two paragraphs
          </li>
          <li>
            Output multiple UserOutput components in the App component (any
            paragraph text of your choice)
          </li>
          <li>
            Pass a username (of your choice) to UserOutput via props and display
            it there
          </li>
          <li>
            Add state to the App component (=> the username) and pass the
            username to the UserOutput component
          </li>
          <li>
            add a method to manipulate the state (=> an event-handler method)
          </li>
          <li>
            pass the event-handler method reference to the UserInput component
            and bind it to the input-change event
          </li>
          <li>
            Ensure that the new input entered by the user overwrites the old
            username passed to UserInput
          </li>
          <li>
            add two-way-binding to yout input (in UserInput) to also display the
            starting username
          </li>
          <li>
            add styling of your choice to your components/elements in the
            components - both with inline styles and stylesheets
          </li>
        </ol>

        <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Spiderman" />
      </div>
    );
  }
}

export default App;
