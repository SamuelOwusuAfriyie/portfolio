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
            <div className="col-6 img">

            </div>
            <div className="col-6">
              <p className="about-text">Kitsch health goth hell of, gastropub shoreditch keffiyeh hammock mumblecore cliche pabst tattooed activated charcoal knausgaard. Seitan taiyaki chicharrones, typewriter whatever subway tile selvage mlkshk humblebrag pop-up photo booth actually. Fingerstache kitsch air plant semiotics flexitarian helvetica knausgaard. Seitan pinterest small batch coloring book poke narwhal polaroid hell of iPhone brooklyn post-ironic. Live-edge vexillologist jianbing, ramps kitsch ugh green juice blog vinyl artisan. Tofu selfies leggings messenger bag, hella offal humblebrag art party iPhone. Ethical vaporware humblebrag, direct trade la croix venmo synth bespoke freegan live-edge man braid hella prism. Gentrify taxidermy narwhal, semiotics cold-pressed celiac cred butcher la croix locavore franzen skateboard 8-bit. Crucifix next level coloring book, tilde artisan waistcoat church-key. Shabby chic hexagon air plant, chicharrones beard ramps pinterest vinyl asymmetrical. XOXO chicharrones cold-pressed, vaporware four loko enamel pin chillwave plaid godard shoreditch four dollar toast paleo hoodie. Four dollar toast slow-carb meh keytar hashtag pinterest marfa chicharrones shaman direct trade ugh.</p>
              <button className="btn btn-primary w-25 mx-5">Email</button>
              <button className="btn btn-warning w-25">Github</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default About;
