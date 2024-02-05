import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./todo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  render() {
    // use Todo component inside render method.
    return (
      <div className="App">
        {" "}
        <Todo />{" "}
      </div>
    );
  }
}

export default App;
