// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Works from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Header />
      <Intro />
      <About />
      <Works /> */}
      <Testimonials />
      {/* <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
