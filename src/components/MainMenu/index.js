import React from 'react';
import './styles.css';
import logo from './logo.jpeg';

function MainMenu() {
    return (
        <nav>
            <div className='divMenu'>
                <img src={logo} />
                <h1>Museu do seminário científico</h1>
            </div>
            <div className='divMenu'>
                <div>links</div>
                <div id="dayOne"> Dia 1 </div>
                <div id='dayTwo'> Dia 2 </div>
            </div>
        </nav>
    )
}

export default MainMenu;