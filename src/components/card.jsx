import React, { Component } from "react";
import Moment from "react-moment";

class Card extends Component {
  render() {
    //use object destructing to extract the properties from the card object
    const { field_image, title, field_date_worked } = this.props.card;

    return (
      //wrapper div for each card on the grid
      <div className="card">
        <a href="project.html">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${field_image[0].url})`
            }}
          />
          <div className="card-content">
            <p>{title[0].value}</p>
            <span>
              <Moment format="MMMM YYYY">{field_date_worked[0].value}</Moment>
            </span>
          </div>
        </a>
      </div>
    );
  }
}

export default Card;
