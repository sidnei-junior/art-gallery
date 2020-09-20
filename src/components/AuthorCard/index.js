import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

function AuthorCard( { imgName, author, id } ) {
    return (
        
            
            <Link to={`${id}`} className='AuthorCard'>
                <img src={`./arts/${imgName}`} alt={`Autor: ${author}`}/>
                <h1>{ author }</h1>
            </Link>
        
    )
}

export default AuthorCard;