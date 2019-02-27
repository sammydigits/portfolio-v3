import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact">
        <h1>Contact</h1>
        <p>
          I'm available for new opportunities, email me:{" "}
          <a href="mailto:sam.thompson@gmail.com">sam.thompson@gmail.com</a>
        </p>
      </div>
    );
  }
}

export default Contact;
