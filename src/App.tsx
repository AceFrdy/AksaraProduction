import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Statistics from './components/Statistics';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0B0A09' }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Statistics />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
