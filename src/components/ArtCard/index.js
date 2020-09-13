import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

function ArtCard( { imgName, title, description,idAuthor , id } ) {
    return (
        <div className='ArtCard'>
            <Link to={`/${idAuthor}/${id}`}>
                <img src={`./arts/seridoAuthors/${imgName}`} alt={`Imagem do projeto ${title}`}/>
                <h1>{ title }</h1>
            </Link>
        </div>
    )
}

export default ArtCard;