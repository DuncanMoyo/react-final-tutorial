import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Duncan", age: 28 },
      { name: "Naomi", age: 22 },
      { name: "Moyo", age: 40 },
    ],
  });

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.log("button was clicked");
    // DONT DO THIS : personsState.persons[0].name = 'Duncan';
    setPersonsState({
      persons: [
        { name: "Duncan", age: 280 },
        { name: "Naomi", age: 220 },
        { name: "Moyo", age: 500 },
      ],
      otherState: personsState.otherState,
    });
  };

  return (
    <div className="App">
      <h1>Hi i am a react App</h1>

      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
        My hobbies: Cricket
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', null, React.createElement('h1', {className:}, 'I\'m a React Thingy'));
};

export default App;

// state = {
//   persons: [
//     { name: "Duncan", age: 28 },
//     { name: "Naomi", age: 22 },
//     { name: "Moyo", age: 40 },
//   ],
//   otherState: "some other value",
// };

// switchNameHandler = () => {
//   console.log("button was clicked");
//   // DONT DO THIS : personsState.persons[0].name = 'Duncan';
//   this.setState({
//     persons: [
//       { name: "Duncan", age: 280 },
//       { name: "Naomi", age: 220 },
//       { name: "Moyo", age: 500 },
//     ],
//   });
// };
