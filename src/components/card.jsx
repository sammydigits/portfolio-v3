import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class Card extends Component {
  render() {
    //use object destructing to extract the properties from the card object
    const {
      nid,
      field_image,
      title,
      field_date_worked,
      field_type
    } = this.props.card;

    return (
      //wrapper div for each card on the grid
      <div className="card">
        <Link to={`/project/${nid[0].value}`}>
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${field_image[0].url})`
            }}
          />
          <div className="card-content">
            <span className="card-tags">{field_type[0].value}</span>
            <p>{title[0].value}</p>
            <span className="card-date">
              <Moment format="MMMM YYYY">{field_date_worked[0].value}</Moment>
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
