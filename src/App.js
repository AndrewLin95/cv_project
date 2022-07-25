import React, { Component } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <MainPage/>
      </>
    )
  }
}

export default App;