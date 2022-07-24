import React, { Component } from "react";
import Header from "./components/Header";
import MainForm from "./components/MainForm";

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <MainForm/>
      </>
    )
  }
}

export default App;