import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
     <h1>Hi i am a react App</h1>
     <Person />
     <Person />
     <Person />
    </div>
  );

  // return React.createElement('div', null, React.createElement('h1', {className:}, 'I\'m a React Thingy'));
}

export default App;
