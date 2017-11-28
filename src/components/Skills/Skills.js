import React from "react";
import "./Skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div className="skills-background">
      <div className="jumbotron">
        <h1 className="skills-header">Skills</h1>
        <p className="text my-3">Programming languages and tools I use to develop work experience</p>
      </div>
      <div className="skills container">
        <div className="row">
          <div className="col-md-3">
            <div className="node">
              <img className="img-fluid" src="https://pbs.twimg.com/profile_images/749981640609398784/-amtsDMY.jpg"/>
            </div>
          </div>
          <div className="col-md-3">
            <div className="javascript pt-3">
              <img className="img-fluid" src="http://www.logotypes101.com/logos/531/E9BC19EB93F4FEA9236932ABAD8A7CFF/js.png" />
            </div>
          </div>
          <div className="col-md-3 pt-3">
            <img className="img-fluid" src="https://cdn.tutsplus.com/net/uploads/2014/01/nodejs-testing-chai-retina-preview.png"/>
          </div>
          <div className="col-md-3 pt-3">
            <img className="img-fluid" src="https://opencollective-production.s3-us-west-1.amazonaws.com/mochalogokk2xpng_80237b00-0481-11e6-842c-13d7bfe512ec.png"/>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-3">
            <img className="img-fluid" src="https://lh3.googleusercontent.com/IHbwrohpMbh_TsGN5V3n35bCPuIVs-KB55mW_B5pA-tgHtrj9vl6oLrNSKmGxl7Aaw=w300"/>
          </div>
          <div className="col-md-3 pt-3">
            <img className="img-fluid" src="http://corballis.ie/wp-content/uploads/2016/06/mongodb-300x300.jpg"/>
          </div>
          <div className="col-md-3 pt-3">
            <img className="img-fluid" src="http://www.ics.hawaii.edu/wp-content/uploads/2013/08/jquerylogo320.png"/>
          </div>
          <div className="col-md-3 pt-3">
            <img className="img-fluid" src="https://www.dotemplate.com/adt/uploads/2015/02/wordpress-logo-vector-300x300.png"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 py-3">
            <img className="img-fluid" src="https://cdn.churchm.ag/wp-content/uploads/2011/04/html5-logo.png" />
          </div>
          <div className="col-md-3 py-3">
            <img className="img-fluid" src="http://www.multipetros.gr/wp-content/uploads/2012/05/css3logo.png"/>
          </div>
          <div className="col-md-3 py-3">
            <img className="img-fluid" src="https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png"/>
          </div>
          <div className="col-md-3">
            <img className="img-fluid" src="http://www.unixstickers.com/image/data/stickers/react/badge/React-JS.sh.png" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img className="img-fluid" src="https://getbootstrap.com/assets/img/bootstrap-stack.png" />
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Skills;
