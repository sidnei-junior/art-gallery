import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

import './styles.css';
import logo from './logo.jpeg';
import miniLogo from './miniLogo.jpg';
import { Link } from 'react-router-dom';

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
        console.log(window.location.href);
    }

    const unlockExposure = unlockDay => {
        return new Date().getTime() > new Date(unlockDay).getTime();
    }

    return (
        <nav className="MainMenu">
            <div className='divMenu'>
            <a id='logo' href='https://www.even3.com.br/seminario_cientifico_acari/'><img src={logo} alt='logo' /></a>
            <a id='mini-logo' href='https://www.even3.com.br/seminario_cientifico_acari/'><img src={miniLogo} alt='mini-logo' /></a>
                <div id='title'>
                    <div id='sub-title-1' className='sub-title'><span>IV SEMINÁRIO</span> <span>CIENTÍFICO DE ACARI</span></div>
                    <div id='sub-title-2' className='sub-title'>Tema: Sustentabilidade e educação patrimonial</div>
                </div>
            </div>
            <div id='divMenu-button' className='divMenu'>
                <div className='social-media'>
                    <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(46,177,255,1)" backgroundColor="rgba(255,255,255,1)" iconSize="10" roundness="0%" url="https://instagram.com/seminariocientificodeacari" size="20" />
                    <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="2" borderStyle="solid" icon="youtube" iconColor="rgba(46,177,255,1)" backgroundColor="rgba(255,255,255,1)" iconSize="10" roundness="0%" url="https://www.youtube.com/channel/UCYuJ7aXbmopgA69NPPG3FMA" size="20" />
                    <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="2" borderStyle="solid" icon="facebook" iconColor="rgba(46,177,255,1)" backgroundColor="rgba(255,255,255,1)" iconSize="10" roundness="0%" url="https://www.facebook.com/seminariocientificodeacari/" size="20" />
                </div>
                <div className='group-div-button'>
                
                { unlockExposure('20 Sep, 2020') ? <Link id="dayOne" to={'/'} onClick={() => handleClickDay('dayOne')} className='div-button'>Artes visuais do Seridó</Link> : <div id='dayOne' className='div-button day-lock'><span className='day-unlock blink'>21/09/2020</span>Artes visuais do Seridó</div> }
                { unlockExposure('20 Sep, 2020') ? <Link id='dayTwo' to={'/'} onClick={() => handleClickDay('dayTwo')} className='div-button'>Pássaros do Seridó</Link> : <div id='dayTwo' className='div-button day-lock'><span className='day-unlock blink'>22/09/2020</span>Pássaros do Seridó</div> }
                </div>
            </div>
        </nav>
    )
}

export default MainMenu;