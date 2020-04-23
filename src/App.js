import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Duncan", age: 28 },
      { name: "Naomi", age: 22 },
      { name: "Moyo", age: 40 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    console.log("button was clicked");
    // DONT DO THIS : this.state.persons[0].name = 'Duncan';
    this.setState({
      persons: [
        { name: 'Duncan', age: 280 },
        { name: "Naomi", age: 220 },
        { name: newName, age: 500 },
      ],
    });
  };

  nameChangedHandler = e => {
    this.setState({
      persons: [
        { name: e.target.value, age: 28 },
        { name: "Naomi", age: 22 },
        { name: "Moyo", age: 50 },
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i am a react App</h1>

        <button onClick={() => this.switchNameHandler('Odin!!!!!!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        >
          My hobbies: Cricket
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Fletcher')}

        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
  // return React.createElement('div', null, React.createElement('h1', {className:}, 'I\'m a React Thingy'));
}

export default App;
