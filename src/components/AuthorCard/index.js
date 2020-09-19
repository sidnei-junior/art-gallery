import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

function AuthorCard( { imgName, author, id } ) {
    return (
        <div className='AuthorCard'>
            
            <Link to={`${id}`}>
                <img src={`./arts/${imgName}`} alt={`Autor: ${author}`}/>
                <h1>{ author }</h1>
            </Link>
        </div>
    )
}

export default AuthorCard;