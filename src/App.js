import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import httpService from "./services/httpService";
import Header from "./components/header";
import Cards from "./components/cards";
import ProjectDetails from "./components/projectdetails";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import config from "./config.json";
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
    const { data: cards } = await httpService.get(
      config.portfolioArticlesEndPoint
    );
    //update initial state
    this.setState({ cards });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/"
            render={props => <Cards {...props} cards={this.state.cards} />}
          />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
