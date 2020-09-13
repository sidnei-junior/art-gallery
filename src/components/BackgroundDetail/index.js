import React from 'react';
import './styles.css';

import hexagonLeft from './half-hexagon-left.png';
import hexagonRight from './half-hexagon-right.png';
import hexagon from './hexagon-complet.png';

function BackgroundDetail() {
    return (
        <div className='BackgroundDetail'>
            <img className="leftMedium detail" src={hexagonLeft} alt='background'/>
            <img className="rightBottom detail" src={hexagon} alt='background'/>
            <img className="rightTop detail" src={hexagonRight} alt='background' />
        </div>
    )
}

export default BackgroundDetail;