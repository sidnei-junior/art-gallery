import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

import './styles.css';
import logo from './logo.jpeg';

function MainMenu({ handleClick }) {
    const handleClickDay = clickComponent => {
        if (clickComponent === 'dayOne') {
            document.getElementById('dayOne').classList.add('day-selected')
            document.getElementById('dayTwo').classList.remove('day-selected')
        }
        if (clickComponent === 'dayTwo') {
            document.getElementById('dayTwo').classList.add('day-selected')
            document.getElementById('dayOne').classList.remove('day-selected')
        }
        handleClick(clickComponent);
    }

    return (
        <nav className="MainMenu">
            <div className='divMenu'>
                <a href='https://www.even3.com.br/seminario_cientifico_acari/'><img src={logo} alt='logo' /></a>
                <div id='title'>
                    <h1 id='sub-title-1'>IV SEMINÁRIO CIENTÍFICO DE ACARI</h1>
                    <div id='sub-title-2' className='sub-title'>Tema: Sustentabilidade e educação patrimonial</div>
                </div>
            </div>
            <div id='divMenu-button' className='divMenu'>
                <div className='social-media'>
                    <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(46,177,255,1)" backgroundColor="rgba(255,255,255,1)" iconSize="10" roundness="0%" url="https://instagram.com/seminariocientificodeacari" size="20" />
                    <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="2" borderStyle="solid" icon="youtube" iconColor="rgba(46,177,255,1)" backgroundColor="rgba(255,255,255,1)" iconSize="10" roundness="0%" url="https://www.youtube.com/channel/UCYuJ7aXbmopgA69NPPG3FMA" size="20" />
                    <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="2" borderStyle="solid" icon="facebook" iconColor="rgba(46,177,255,1)" backgroundColor="rgba(255,255,255,1)" iconSize="10" roundness="0%" url="https://www.facebook.com/seminariocientificodeacari/" size="20" />
                </div>
                <div id="dayOne" onClick={() => handleClickDay('dayOne')} className='div-button day-selected'>Expovirtual: Artes visuais do Seridó</div>
                <div id='dayTwo' onClick={() => handleClickDay('dayTwo')} className='div-button'>Pássaros do Seridó</div>
            </div>
        </nav>
    )
}

export default MainMenu;