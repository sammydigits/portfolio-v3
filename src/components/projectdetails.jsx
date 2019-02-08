import React, { Component } from "react";
import httpService from "../services/httpService";
import config from "../config.json";

class ProjectDetails extends Component {
  //setup the initial state
  state = {
    project: [
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
    //use axios to get our api data, rename it to project
    const { data: project } = await httpService.get(
      config.portfolioArticlesEndPoint + "/" + this.props.match.params.id
    );
    //update initial state
    this.setState({ project });
    console.log(this.state.project);
  }
  render() {
    return (
      <div>
        <h1>{this.state.project[0].title[0].value}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.project[0].body[0].value
          }}
        />
      </div>
    );
  }
}

export default ProjectDetails;
