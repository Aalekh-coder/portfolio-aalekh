import React from 'react';
import Hero from './components/Hero';
import ImageGrid from './components/ImageGrid';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <ImageGrid />
      <Projects />
      <Resume />
      <Hobbies />
    </div>
  );
}

export default App;