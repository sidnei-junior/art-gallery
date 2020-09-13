import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from "react-icons/bs";

function NavegationBar( { author, authorId, art, artId } ) {
    return (
        <div className='NavegationBar'>
          <Link to={`/`}>Home</Link>
            
            {author ? <div> <BsArrowRightShort /> </div> : null}
            {author ? <Link to={`/${authorId}`}> {author} </Link> : null}

            {art ? <div> <BsArrowRightShort /> </div> : null}
            {art ? <Link to={`/${authorId}/${artId}`}> {art} </Link> : null}
          
        </div>
    )
}

export default NavegationBar;

