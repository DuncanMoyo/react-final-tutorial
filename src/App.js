import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Duncan', age: 28},
      {name: 'Naomi', age: 22},
      {name: 'Moyo', age: 40},
    ]
  }

  render() {
    return (
      <div className="App">

       <h1>Hi i am a react App</h1>

       <button>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Cricket</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
 

  // return React.createElement('div', null, React.createElement('h1', {className:}, 'I\'m a React Thingy'));
}

export default App;
