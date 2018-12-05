import React, { Component } from "react";
import Header from "./components/header";
import Cards from "./components/cards";
import Footer from "./components/footer";

class App extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: "Apple",
        date: "November 2018",
        image: "./images/apple-card.png"
      },
      {
        id: 2,
        title: "Google",
        date: "October 2018",
        image: "./images/apple-card.png"
      },
      {
        id: 3,
        title: "Amazon",
        date: "September 2018",
        image: "./images/apple-card.png"
      },
      {
        id: 4,
        title: "Facebook",
        date: "August 2018",
        image: "./images/apple-card.png"
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Cards cards={this.state.cards} />
        <Footer />
      </div>
    );
  }
}

export default App;
