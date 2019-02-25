import React, { Component } from "react";
import posed from "react-pose";
import Card from "./card";

const ListContainer = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

class Cards extends Component {
  render() {
    // use object destructing to exract the properties of the props object
    const { cards } = this.props;

    return (
      <ListContainer className="cards-container">
        {cards.map(card => (
          //pass the entire card object to each card
          <Card key={card.nid} card={card} />
        ))}
      </ListContainer>
    );
  }
}

export default Cards;
