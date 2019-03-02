import React, { Component } from "react";
import posed from "react-pose";
import { NavLink } from "react-router-dom";
import config from "../config.json";
import httpService from "../services/httpService";
import { LuminousGallery } from "luminous-lightbox";
import Profile from "./profile";
import "luminous-lightbox/dist/luminous-basic.min.css";

const Container = posed.div({
  enter: { staggerChildren: 200 }
});

const H1 = posed.h1({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const DetailMeta = posed.p({
  enter: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 }
});

const DetailImage = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const ProfileContainer = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const MainContent = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class ProjectDetails extends Component {
  //setup the initial state
  state = {
    project: [
      {
        title: "",
        body: "",
        field_image: "",
        field_date_worked: "",
        field_type: ""
      }
    ],
    related: []
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

    //make the images zoomable
    new LuminousGallery(document.querySelectorAll(".gallery"));
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

    return (
      <Container className="details-container">
        <DetailImage
          className="detail-image"
          style={{
            backgroundImage: `url(https://portfolio-cms.sam-thompson.info/${field_image})`
          }}
        />
        <div className="detail-title">
          <H1>{title}</H1>
          <DetailMeta>
            {field_date_worked} . {field_type}
          </DetailMeta>
        </div>
        <div>
          <ProfileContainer>
            <Profile />
          </ProfileContainer>
          <div className="related">
            <p className="tag">More Projects</p>

            {this.state.related.map(project => (
              <NavLink
                to={`/project/${project.nid}`}
                className="teaser"
                key={project.nid}
                activeClassName="active"
              >
                <div className="teaser-content">
                  <h4>{project.title}</h4>
                  <time className="card-date">{project.field_date_worked}</time>
                </div>
                <div className="teaser-image">
                  <div
                    className="teaser-bgimage"
                    style={{
                      backgroundImage: `url(https://portfolio-cms.sam-thompson.info/${
                        project.field_image
                      })`
                    }}
                  />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <MainContent>
          <div
            className="detail-body"
            dangerouslySetInnerHTML={{
              __html: body
            }}
          />
        </MainContent>
      </Container>
    );
  }
}

export default ProjectDetails;
