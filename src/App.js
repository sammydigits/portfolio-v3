import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Header from "./components/header";
import Cards from "./components/cards";
import Footer from "./components/footer";

class App extends Component {
  //setup the initial state
  state = {
    cards: [
      {
        title: [
          {
            value: ""
          }
        ],
        nid: [
          {
            value: Math.random
          }
        ],
        field_image: [
          {
            url:
              "https://us.v-cdn.net/5019960/uploads/editor/7r/aozh89cuo8e8.gif"
          }
        ],
        field_date_worked: [
          {
            value: "01/01/1970"
          }
        ],
        field_type: [
          {
            value: ""
          }
        ]
      }
    ]
  };

  async componentDidMount() {
    //use axios to get our api data, rename it to cards
    const { data: cards } = await axios.get(
      "https://portfolio-cms.sam-thompson.info/rest/articles"
    );
    //overwrite initial state
    //        <Cards cards={this.state.cards} />
    this.setState({ cards });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Route
          path="/"
          render={props => <Cards {...props} cards={this.state.cards} />}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
