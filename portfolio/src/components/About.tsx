import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="row about-info wide" data-animate-block>
        <div className="column lg-6 md-12 about-info__pic-block">
          <img src="images/about-photo.jpg" alt="About" className="about-info__pic" />
        </div>
        <div className="column lg-6 md-12">
          <div className="about-info__text">
            <h2 className="text-pretitle with-line">About</h2>
            <p className="attention-getter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#0" className="btn btn--medium u-fullwidth">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;