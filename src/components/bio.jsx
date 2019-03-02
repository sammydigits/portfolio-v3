import React from "react";
import { Link } from "react-router-dom";

//bio can be a stateless functional component, it doesnt do anything
const Bio = ({ type }) => {
  //console.log(this.props);
  switch (type) {
    default:
      return (
        <React.Fragment>
          <p>
            Sam Thompson is Website Manager at Nadex, a fintech firm based in
            Chicago, where he is responsible for full stack web development and
            for providing the best possible user experience to 100k visitors per
            month.
          </p>
          <p>
            As Nadex's website manager, Sam does more than wrangle code. With
            more than 20 years of web development experience, he's obsessed with
            innovating new ways of using web technology that's absurdly useful
            and effective. (He also works with in-house contributors as an
            software engineer, designer, strategist, UX engineer, coach, and
            sometimes therapist.)
          </p>
          <p>
            Sam has a passion for front-end performance, design, and user
            experience, and has been professionally crafting websites since
            1997. Sam has a vast array of knowledge and experience in building
            products for the web, he even does it in his spare time!
          </p>
          <p>
            Sam has enjoyed working on the agency side for Razorfish (worlds
            largest interactive agency), and client side for IG (UK's largest
            financial trading firm).
          </p>
          <p>
            Sam hails from damp London, England, where he earned a diploma in
            Graphic Design. Sam now lives with his wife and children in sunny
            Dallas, Texas.
          </p>
        </React.Fragment>
      );
    case "short":
      return (
        <p>
          With more than 20 years of web development experience, Sam is obsessed
          with innovating new ways of using web technology that's absurdly
          useful and effective. <Link to="/about">More</Link>
        </p>
      );
  }
};

export default Bio;
