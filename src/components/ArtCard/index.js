import React from 'react';
import './styles.css';

function ArtCard( {imgName} ) {
    return (
        <div class='ArtCard'>
            <img src={`./arts/${imgName}`} />
            <h1>Título</h1>
        </div>
    )
}

export default ArtCard;