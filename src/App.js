import React, { Component } from "react";
import Header from "./components/header";
import MainPage from "./components/mainPage";

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