import React from "react";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <div>
      <h1>About this App</h1>
      <p className="my-1">
        {" "}
        A full stack react app that helps you keeping contacts.
      </p>
      <p className="bg-dark p">
        <strong>Version: </strong>1.0.0
      </p>
    </div>
  );
};

About.propTypes = {};

export default About;