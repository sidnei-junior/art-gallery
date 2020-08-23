import React from 'react';

class Project extends React.Component {
  render() {
    const project = this.props.projects[this.props.match.params.id]
     return (
        <div className='project'>
          <h1>{project.title}</h1>
          <img src={`./arts/${project.img}`} alt={`Imagem do projeto ${project.title}`}/>
          <p>{project.description}</p>
        </div>
     )
  }
}

export default Project;