import React, { Component } from "react";
import Card from "./card";
class Cards extends Component {
  render() {
    // use object destructing to exract the properties of the props object
    const { cards } = this.props;

    return (
      <div class="cards-container">
        {cards.map(card => (
          //pass the entire card object to each card
          <Card key={card.nid[0].value} card={card} />
        ))}
      </div>
    );
  }
}

export default Cards;
