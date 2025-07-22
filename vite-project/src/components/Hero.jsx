import React from 'react';
import './Hero.css';
import Navbar from './Navbar';
import Butterflies from './Butterflies';

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <Butterflies /> {/* Add Lottie butterflies */}
      <div className="hero-content">
        <h1>Welcome to the Botanical Garden</h1>
        <p>Explore a world of blooming serenity and vibrant nature.</p>
        <button>Start Exploring</button>
      </div>
    </div>
  );
};

export default Hero;
