import React from 'react';
import { HashRouter } from 'react-router-dom'; // Use HashRouter instead of BrowserRouter
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HomePrograms from './components/HomePrograms';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Services />
        <HomePrograms />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;