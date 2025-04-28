import React from 'react';
import { ContainerScroll } from "./ui/container-scroll-animation";
const Main: React.FC = () => {
  return (
    <main className="main-content">
      {/* Header Section */}
      <header className="s-header">
        <div className="header-mobile">
          <span className="mobile-home-link">
            <a href="index.html">Luther.</a>
          </span>
          <a className="mobile-menu-toggle" href="#0">
            <span>Menu</span>
          </a>
        </div>
        <div className="row wide main-nav-wrap">
          <nav className="column lg-12 main-nav">
            <ul>
              <li><a href="index.html" className="home-link">Luther.</a></li>
              <li><a href="#intro" className="smoothscroll">Intro</a></li>
              <li><a href="#about" className="smoothscroll">About</a></li>
              <li><a href="#works" className="smoothscroll">Works</a></li>
              <li><a href="#contact" className="smoothscroll">Say Hello</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Scrollable Content Section */}
      <ContainerScroll titleComponent={<h2 className="text-pretitle">About Me</h2>}>
        {/* About Section Content */}
        <div className="about-content">
          <p className="h1">
            I am passionate about creating innovative and efficient solutions through code. My journey in software development started with a love for problem-solving and technology.
          </p>
          <p>
            I have experience working with various technologies including React, TypeScript, Python, and more. My goal is to continue learning and grow as a developer.
          </p>
        </div>
      </ContainerScroll>

      {/* Footer Section */}
      <footer className="s-footer">
        <div className="row">
          <div className="column ss-copyright">
            <span>© Copyright Luther 2021</span> 
            <span>Design by <a href="https://www.styleshout.com/">StyleShout</a> Distribution By <a href="https://themewagon.com">Themewagon</a></span>
          </div>
          <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Main;
