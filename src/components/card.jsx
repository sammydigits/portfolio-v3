import React, { Component } from "react";

class Card extends Component {
  render() {
    //use object destructing to extract the properties from the card object
    const { image, title, date } = this.props.card;
    return (
      //wrapper div for each card on the grid
      <div className="card">
        <a href="project.html">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="card-content">
            <p>{title}</p>
            <span>{date}</span>
          </div>
        </a>
      </div>
    );
  }
}

export default Card;
