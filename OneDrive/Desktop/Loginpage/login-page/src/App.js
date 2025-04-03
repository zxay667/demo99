import React, { useEffect } from 'react';
import './App.css';
import Login from './Components/Login';

function App() {
  useEffect(() => {
    const createRaindrops = () => {
      const rainContainer = document.querySelector('.rain-container');
      const numberOfDrops = 50;

      // Clear existing raindrops
      rainContainer.innerHTML = '';

      // Create new raindrops
      for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'raindrop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        drop.style.opacity = Math.random();
        rainContainer.appendChild(drop);
      }
    };

    // Initial creation
    createRaindrops();

    // Recreate raindrops periodically
    const interval = setInterval(createRaindrops, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="rain-container"></div>
      <Login />
    </div>
  );
}

export default App;