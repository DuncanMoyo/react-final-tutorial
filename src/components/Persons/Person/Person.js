import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Auxillary";
import withClass from '../../../hoc/withClass'

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <p key="a1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="a2">{this.props.children}</p>
        <input
          key="a3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
