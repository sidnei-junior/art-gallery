import React from 'react';
import './styles.css';

function EventDescription({ title, text }) {
    const unlockExposure = unlockDay => {
        return new Date().getTime() > new Date(unlockDay).getTime();
    }
    const TEXT_LOCK = 'A PRIMEIRA EXPOSIÇÃO ABRIRÁ NA SEGUNDA-FEIRA (21/09/2020)'
    return (
        <div className='EventDescription'>
            {title ? <div className='descriptionTitle'> {title} </div> : null}
            { unlockExposure('21 Sep, 2020') ? <div className='descriptionText'> {text} </div> : <div className='descriptionText'> {TEXT_LOCK} </div>}
        </div>
    )
}

export default EventDescription;