import React from 'react';
import './styles.css';

function EventDescription({ title, text }) {
    return (
        <div className='EventDescription'>
            {title ? <div> {title} </div> : null}
            <div> {text} </div>
        </div>
    )
}

export default EventDescription;