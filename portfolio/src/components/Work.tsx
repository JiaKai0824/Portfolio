import React from 'react';

const Works: React.FC = () => {
  return (
    <section id="works" className="s-works target-section">
      <div className="row works-portfolio">
        <div className="column lg-12" data-animate-block>
          <h2 className="text-pretitle">Recent Works</h2>
          <p className="h1">Here are some of my favorite projects I have done lately. Feel free to check them out.</p>
          {/* You can map over a list of projects here */}
        </div>
      </div>
    </section>
  );
};

export default Works;
