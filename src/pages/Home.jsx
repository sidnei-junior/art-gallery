import React from 'react';
import ArtCard from '../components/ArtCard';

class Home extends React.Component {
  render() {
     return (
        <div className='Exposure'>
          { this.props.projects.map((project, index) => (
            <ArtCard imgName={project.img} title={project.title} id={index} key={index}/>
          )) }
        </div>
     )
  }
}

export default Home;