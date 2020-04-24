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
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    console.log("button was clicked");
    // DONT DO THIS : this.state.persons[0].name = 'Duncan';
    this.setState({
      persons: [
        { name: "Duncan", age: 280 },
        { name: "Naomi", age: 220 },
        { name: newName, age: 500 },
      ],
    });
  };

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: e.target.value, age: 28 },
        { name: "Naomi", age: 22 },
        { name: "Moyo", age: 50 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi i am a react App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', null, React.createElement('h1', {className:}, 'I\'m a React Thingy'));
}

export default App;
