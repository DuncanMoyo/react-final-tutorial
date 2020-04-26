import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'qwerty', name: "Duncan", age: 28 },
      { id: 'asdfgh', name: "Naomi", age: 22 },
      { id: 'zxcvbn', name: "Moyo", age: 40 },
    ],
    otherState: "some other value",
    showPersons: false,
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); you can use this or....
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click = {() =>this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id}/>;
          })}
        </div>
      );
      style.backgroundColor = "red";
      style [':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi i am a react App</h1>
        <p className={classes.join(' ')}>This is really working man</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', null, React.createElement('h1', {className:}, 'I\'m a React Thingy'));
}

export default Radium(App);
