import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Header/>
        <Profile/>
        <About/>
        <Skills/>
      </div>
    )
  }
}
export default App;
