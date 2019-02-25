import React, { Component } from "react";
import posed from "react-pose";
import { Link } from "react-router-dom";

const Item = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 }
});

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
      <Item className="card">
        <Link to={`/project/${nid}`}>
          <div
            className="card-image"
            style={{
              backgroundImage: `url(https://portfolio-cms.sam-thompson.info/${field_image})`
            }}
          />
          <div className="card-content">
            <span className="tag">{field_type}</span>
            <p>{title}</p>
            <time className="card-date">{field_date_worked}</time>
          </div>
        </Link>
      </Item>
    );
  }
}

export default Card;
