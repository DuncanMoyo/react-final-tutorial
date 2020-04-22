import React from "react";
import "./App.css";

function App() {
  // return (
  //   <div className="App">
  //    <h1>Hi i am a react App</h1>
  //   </div>
  // );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", { className: "App" }, "I'm a React Thingy")
  );
}

export default App;
