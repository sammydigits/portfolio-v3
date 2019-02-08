import React, { Component } from "react";
import httpService from "../services/httpService";
import config from "../config.json";

class ProjectDetails extends Component {
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
        body: [
          {
            processed: ""
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
      config.portfolioArticlesEndPoint + "/" + this.props.match.params.id
    );
    //update initial state
    this.setState({ cards });
    console.log(this.state.cards);
  }
  render() {
    return (
      <div>
        <h1>{this.state.cards[0].title[0].value}</h1>
        <p>{this.state.cards[0].body[0].value}</p>
      </div>
    );
  }
}

export default ProjectDetails;
