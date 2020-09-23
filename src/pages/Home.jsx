import React from 'react';
import NavegationBar from '../components/NavegationBar';
import AuthorCard from '../components/AuthorCard';

import EventDescription from '../components/EventDescription';

import { eventDescription } from'../database'


class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <EventDescription text={eventDescription[this.props.textEvent]} />
        <NavegationBar />
        
        <div className='AuthorCards'>
          {/* {this.props.authors ? <div className='HomeTitle'>Expositores</div>: null} */}
        { this.props.authors.map((author, index) => (
          <AuthorCard imgName={author.photo} author={author.author} id={index} key={index} />
        ))}
        </div>
      </div>
    )
  }
}

export default Home;