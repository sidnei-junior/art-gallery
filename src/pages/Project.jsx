import React from 'react';
import './Project.css';

import NavegationBar from '../components/NavegationBar';
import EventDescription from '../components/EventDescription';

class Project extends React.Component {
  render() {
    console.log(this.props.match.params)
    const idAuthor = this.props.match.params.idAuthor
    const idArt = this.props.match.params.id

    const author = this.props.projects[idAuthor]
    const project = author.gallery[idArt]
    return (
      <div className='project'>
        <EventDescription title={author.author} text={author.description} />
        <NavegationBar author={author.author} authorId={idAuthor} art={project.title} artId={idArt} />
        <div className='DescriptionArt'>
          <h1>{project.title}</h1>
          <img src={`../arts/${project.img}`} alt={`Imagem do projeto ${project.title}`} />
          <p>{project.description}</p>
        </div>
      </div>
    )
  }
}

export default Project;