import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import httpService from "./services/httpService";
import posed, { PoseGroup } from "react-pose";
import Header from "./components/header";
import Cards from "./components/cards";
import Project from "./components/project";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import config from "./config.json";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 100, beforeChildren: true },
  exit: { opacity: 0 }
});

class App extends Component {
  //setup the initial state
  state = {
    cards: []
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
        <ScrollToTop>
          <PoseGroup>
            <RouteContainer key={window.location.pathname}>
              <Switch>
                <Route path="/project/:id" component={Project} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route
                  path="/"
                  render={props => (
                    <Cards {...props} cards={this.state.cards} />
                  )}
                />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </ScrollToTop>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
