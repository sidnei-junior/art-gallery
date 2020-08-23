import React from 'react';
import './App.css';

import MainMenu from './components/MainMenu';
import ArtCard from './components/ArtCard';
import FooterMenu from './components/FooterMenu';
import EventDescription from './components/EventDescription';
import BackgroundDetail from './components/BackgroundDetail';



function App() {
  const imgsPath = ['img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png'];
  
  return (
    <div className='App'>
      <MainMenu />
      <EventDescription />
      <div className='Exposure'>
      {imgsPath.map(img => (
        <ArtCard imgName={img}/>
      ))}
      </div>
      <FooterMenu />
      <BackgroundDetail />
    </div>
  );
}

export default App;
