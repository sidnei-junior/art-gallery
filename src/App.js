import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import './App.css';

import MainMenu from './components/MainMenu';
import FooterMenu from './components/FooterMenu';
import BackgroundDetail from './components/BackgroundDetail';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Project from './pages/Project';

import projects from'./database'

function App() {
  
  const handleClick = clickComponent => setDay(clickComponent);
  const [ day, setDay ] = useState('dayZero');

  return (
    <div className='App container'>
      <BrowserRouter>
        <MainMenu handleClick={handleClick} />
        
        <Route exact path="/" render={(props) => <Home {...props} authors={projects[day]} textEvent={day} />} />
        <Route exact path="/:idAuthor" render={(props) => <Gallery {...props} projects={projects[day]} />} />
        <Route path="/:idAuthor/:id" render={(props) => <Project {...props} projects={projects[day]} />} />
        <FooterMenu />
        <BackgroundDetail />
      </BrowserRouter>
    </div>
  );
}



export default App;
