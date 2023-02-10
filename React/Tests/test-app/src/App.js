import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const handleMouseMove = event => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  let size = {
    width: 100,
    heigth: 100 
  };

  const rectangle = {
    position: 'absolute',
    top: `${mousePosition.y - size.heigth/2}px`,
    left: `${mousePosition.x - size.width/2}px`
  };

  if (mousePosition.y <= (size.heigth/2)){
    rectangle.top = `${0}px`
  }
  if (mousePosition.x <= (size.width/2)){
    rectangle.left = `${0}px`
  }
  if (mousePosition.y + (size.heigth/2) >= windowSize.height){
    rectangle.top = `${windowSize.height - (size.heigth)}px`
  }
  if (mousePosition.x + (size.width/2) >= windowSize.width){
    rectangle.left = `${windowSize.width - (size.width)}px`
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="rectangle" style={rectangle}>
        </div>
      </header>
    </div>
  );
}

export default App;
