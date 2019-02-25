import React, { Component } from "react";
import posed from "react-pose";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

class Contact extends Component {
  state = {};
  render() {
    return (
      <Container className="contact">
        <h1>Contact</h1>
        <P>
          I'm available for new opportunities, email me:{" "}
          <a href="mailto:sam.thompson@gmail.com">sam.thompson@gmail.com</a>
        </P>
      </Container>
    );
  }
}

export default Contact;
