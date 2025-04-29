import React from 'react';
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

const Main: React.FC = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <main className="main-content">
      {/* Header Section */}
      <header className="s-header">
        <div className="header-mobile">
          <span className="mobile-home-link">
            <a href="index.html">JiaKai</a>
          </span>
          <a className="mobile-menu-toggle" href="#0">
            <span>Menu</span>
          </a>
        </div>
        <div className="row wide main-nav-wrap">
          <nav className="column lg-12 main-nav">
            <ul>
              <li><a href="index.html" className="home-link">JiaKai</a></li>
              <li><a href="#intro" className="smoothscroll">Intro</a></li>
              <li><a href="#about" className="smoothscroll">About</a></li>
              <li><a href="#works" className="smoothscroll">Works</a></li>
                <li><a href="#contact" className="smoothscroll">Say Hello</a></li>
              </ul>
          </nav>
        </div>
      </header>

    

      {/* CanvasRevealEffect Demo Section */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
      >
        <p className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
          With insomnia, nothing&apos;s real. Everything is far away. Everything
          is a copy, of a copy, of a copy.
        </p>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full absolute inset-0"
            >
              <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-transparent"
                colors={[
                  [59, 130, 246],
                  [139, 92, 246],
                ]}
                opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                dotSize={2}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Radial gradient for the cute fade */}
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </div>
    </main>
  );
};

export default Main;
