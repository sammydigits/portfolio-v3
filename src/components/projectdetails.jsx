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
        field_image: [
          {
            url: "",
            alt: ""
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
    console.log(this.state.project[0]);
  }
  render() {
    //use objective destructuing to extract the properties from the project
    const { title, body, field_image } = this.state.project[0];

    return (
      <div class="details-container">
        <div
          className="detail-image"
          style={{
            backgroundImage: `url(${field_image[0].url})`
          }}
        />
        <div class="detail-title">
          <h1>{title[0].value}</h1>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: body[0].value
          }}
        />
      </div>
    );
  }
}

export default ProjectDetails;
