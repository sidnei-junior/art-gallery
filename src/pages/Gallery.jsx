import React from 'react';
import ArtCard from '../components/ArtCard';
import NavegationBar from '../components/NavegationBar';
import EventDescription from '../components/EventDescription';


class Gallery extends React.Component {
  render() {
    const idAuthor = this.props.match.params.idAuthor
    const author = this.props.projects[idAuthor];
     return (
        <div className='Gallery'>
          <EventDescription title={author.author} text={author.description} />
          <NavegationBar author={author.author} authorId={idAuthor} />
          <div className='ArtCards'>
          {author.gallery.map((art, index) => (
            <ArtCard imgName={art.img} title={art.title} description={art.description} idAuthor={idAuthor} id={index} key={index}/>
          )) }
          </div>
        </div>
     )
  }
}

export default Gallery;