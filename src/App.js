import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import './App.css';

import MainMenu from './components/MainMenu';
import FooterMenu from './components/FooterMenu';

import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  const day = 'dayOne'
  const projects = {
    dayOne: [
      {
        img: 'img.png',
        title: 'teste',
        description: "description"
      },
      {
        img: 'img.png',
        title: '2',
        description: "description"
      },
      {
        img: 'img.png',
        title: 3,
        description: "description"
      },
      {
        img: 'img.png',
        title: '4',
        description: "description"
      },
      {
        img: 'img.png',
        title: 5,
        description: "description"
      },
      {
        img: 'img.png',
        title: '6',
        description: "description"
      },
      {
        img: 'img.png',
        title: 7,
        description: "description"
      },
      {
        img: 'img.png',
        title: '8',
        description: "description"
      },
      {
        img: 'img.png',
        title: '9',
        description: "description"
      },
      {
        img: 'img.png',
        title: '10',
        description: "description"
      },
      {
        img: 'img.png',
        title: '11',
        description: "description"
      },
      {
        img: 'img.png',
        title: '12',
        description: "description"
      },
      {
        img: 'img.png',
        title: '13',
        description: "description"
      },
    ],
    dayTwo: []
  };
  return (
    <div className='App'>
      <BrowserRouter>
        <MainMenu />
        <Route exact path = "/" render={(props) => <Home {...props} projects={projects[day]} />} />
        <Route path = "/:id" render={(props) => <Project {...props} projects={projects[day]} />} />
        <FooterMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
