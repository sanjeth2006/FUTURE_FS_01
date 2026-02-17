import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
        <Background />
        <Header />
        <main>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
