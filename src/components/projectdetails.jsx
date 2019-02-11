import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            value: ""
          }
        ],
        field_type: [
          {
            value: ""
          }
        ]
      }
    ],
    related: [
      {
        title: [
          {
            value: ""
          }
        ],
        nid: [
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

    //get a list of related projects from our api, rename it to related
    const { data: related } = await httpService.get(
      config.portfolioArticlesEndPoint
    );
    //update initial state
    this.setState({ related });
  }
  render() {
    //use objective destructuing to extract the properties from the project
    const {
      title,
      body,
      field_image,
      field_date_worked,
      field_type
    } = this.state.project[0];

    //ensure inline images are prefixed with cms url
    let updatedBody = body[0].processed.replace(
      'src="/',
      'src="https://portfolio-cms.sam-thompson.info/'
    );

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
          <p>
            {field_date_worked[0].value} . {field_type[0].value}
          </p>
        </div>
        <div>
          <div class="profile">Sam Thompson</div>
          <div class="related">
            <p>Recent Projects</p>
            <ul>
              {this.state.related.map(project => (
                //pass the entire card object to each card
                <li key={project.nid[0].value}>
                  <Link to={`/project/${project.nid[0].value}`}>
                    {project.title[0].value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="detail-body"
          dangerouslySetInnerHTML={{
            __html: updatedBody
          }}
        />
      </div>
    );
  }
}

export default ProjectDetails;
