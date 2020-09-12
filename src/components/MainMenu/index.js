import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

import './styles.css';
import logo from './logo.jpeg';

function MainMenu() {
    return (
        <nav className="MainMenu">
            <div className='divMenu'>
                <img src={logo} />
                <div id='title'>
                    <h1 id='sub-title-1'>IV SEMINÁRIO CIENTÍFICO DE ACARI</h1>
                    <div id='sub-title-2' class='sub-title'>Tema: Sustentabilidade e educação patrimonial</div>
                </div>
            </div>
            <div id='divMenu-button' className='divMenu'>
                <div className='social-media'>
                {/* <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(17,94,114,1)" backgroundColor="rgba(212,233,245,1)" iconSize="10" roundness="0%" url="https://instagram.com/seminariocientificodeacari?igshid=1wd0uj9uuwhrh" size="20" /> */}
                <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(46,177,255,1)" backgroundColor="rgba(255,255,255,1)" iconSize="10" roundness="0%" url="https://instagram.com/seminariocientificodeacari" size="20" />
                <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="2" borderStyle="solid" icon="youtube" iconColor="rgba(46,177,255,1)" backgroundColor="rgba(255,255,255,1)" iconSize="10" roundness="0%" url="https://www.youtube.com/channel/UCYuJ7aXbmopgA69NPPG3FMA" size="20" />
                <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="2" borderStyle="solid" icon="facebook" iconColor="rgba(46,177,255,1)" backgroundColor="rgba(255,255,255,1)" iconSize="10" roundness="0%" url="https://www.facebook.com/seminariocientificodeacari/" size="20" />
                </div>
                <div id="dayOne" className='div-button day-selected'>Expovirtual: Artes visuais do Seridó</div>
                <div id='dayTwo' className='div-button'>Pássaros do Seridó</div>
            </div>
        </nav>
    )
}

export default MainMenu;