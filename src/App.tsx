import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCars />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;