import React from 'react';
import jumbotron from '/assets/about-jumbotron.jpg';

const AboutJumbotron = () => {
  return (
    <div id="about-jumbotron" className="mx-auto my-8 mt-20">
      <div className="mx-auto mb-5 w-8/12 " id="about-jumbotron-left">
        <img src={jumbotron} alt="" />
      </div>
    </div>
  );
};

export default AboutJumbotron;
