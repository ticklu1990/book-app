import React, { Component } from "react";
import Books from "./Books";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    );
  }
}

export default App;
