import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Header/>
        <Profile/>
        <About/>
        <Skills/>
        <Project/>
        <Footer/>
      </div>
    )
  }
}
export default App;
