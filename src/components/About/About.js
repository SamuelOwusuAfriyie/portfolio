import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-me">
        <div className="container">
          <div className="row">
            <h1 className="pt-5">About</h1>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-6 img"></div>
            <div className="col-6">
              <p className="about-text">I am Samuel Owusu Afriyie. I have a passion for programming and an overwhelming zeal when it comes to cinematography. I believe in transforming the world with the power of programming.When I'm not working, I'm busily surfing the internet to find out what's new and playing my role as a humanitarian to make the world a beautiful better place for all people & making sure Story Time Production is in safe hands. I am a board member of a hospital whose mission is to provide free medical care to underserved and under-privileged children in West Africa.
                If you would like to contact me so we develop some cool transforming code as a programmer; send me an email via the email button below and click on the Github button to view my Github projects.
              </p>
              <a className="btn btn-primary w-25 mx-5" href="mailto:greatman662@gmail.com">Email</a>
              <a className="btn btn-warning w-25" href="https://github.com/SamuelOwusuAfriyie">Github</a>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default About;
