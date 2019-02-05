import React, { Component } from "react";
import Card from "./card";
class Cards extends Component {
  render() {
    // use object destructing to exract the properties of the props object
    const { cards } = this.props;

    return (
      //use react fragment so our css grid doesnt break
      <React.Fragment>
        {cards.map(card => (
          //pass the entire card object to the card
          <Card key={card.nid[0].value} card={card} />
        ))}
      </React.Fragment>
    );
  }
}

export default Cards;
