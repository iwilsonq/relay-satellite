import React from 'react';

const About = props => {
  return (
    <div className="about">
      <h1>About</h1>
      {props.text}
    </div>
  );
};

export default About;
