import * as React from 'react'
import landing_page from "../images/landing_page copy.png";
import grid from "../images/grid.svg";
import sign from '../images/sign.png';
import head from '../images/girl head.png';
import cafefloor from '../images/cafefloor.png';
import blackboard from '../images/cafe blackboard.png';
import hsign from '../images/hanging sign.png';
import bookcase from '../images/bookcase.svg';
import shelf from '../images/cafe shelf.svg';
import plant from '../images/cafe plant.svg';
import display from '../images/dessert display.svg';
import pottedplant from '../images/potted plant.png';
import floorplant_shadow from '../images/floorplant shadow.svg';
import pause from '../images/pausebutton.svg';
import play from '../images/playbutton.svg';
import skip from '../images/skip.svg';
import cafegirl from '../images/cafe girl.png';
import cup from '../images/cafe cup.png';

let divStyles = {
    position: 'relative',
    display: 'inherit',
    margin: 0,
    padding: 0,
    width: '100%',
    height: '56.24vw',
    overflow: 'hidden',
    backgroundImage: 'url(' + grid + ')',
    backgroundColor: '#DDBC9B',
    backgroundSize: '104%'
}

const TopPicture = () => {
    let now = Date.now();
    // make a date for June 17, 2022
    let endDate = new Date(2022, 5, 17);
    let timeLeft = endDate - now;
    let daysLeft = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  return (
    <div style={divStyles}>
        {/* top image */}
        {/* <img src={landing_page} alt="placeholder" width="100%" /> */}

        <img src={cafefloor} alt="floor" style={{position: 'absolute', top: '71%', left: 0, width: '100%'}} />
        <img src={blackboard} alt="blackboard" style={{position: 'absolute', top: '-12.96vw', left: '50%', width: '45.1vw', transform: 'translateX(-50%)'}} />
        

        <img src={bookcase} alt="bookcase" style={{position: 'absolute', bottom: '15.3vw', left: '-1.75vw', width: '8.45vw'}} />
        <img src={shelf} alt="top shelf" style={{position: 'absolute', top: '7.62vw', right: '1.78vw', width: '18.2vw'}} />
        <img src={plant} alt="shelf plant" style={{position: 'absolute', top: '1.1vw', right: '1.13vw', width: '5.51vw'}} />
        <img src={shelf} alt="bottom shelf" style={{position: 'absolute', top: '16.84vw', right: '7.985vw', width: '18.2vw'}} />
        <img src={floorplant_shadow} alt="potted plant shadow" style={{position: 'absolute', bottom: '12.42vw', left: '25.7vw', width: '11.6vw'}} />
        <img src={pottedplant} alt="potted plant" style={{position: 'absolute', bottom: '13.42vw', left: '19.15vw', width: '9.92vw'}}/>
        <img src={display} alt="dessert display" style={{position: 'absolute', top: '21.34vw', left: '50%', width: '41.5vw', transform: 'translateX(-50%)'}} />

        <img src={pottedplant} alt="potted plant 2" style={{position: 'absolute', bottom: '11vw', left: '92vw', width: '9.92vw', transform: 'scaleX(-1)'}}/>

        <img src={sign} alt="floor sign" style={{position: 'absolute', width: '14.5vw', top: '61.9%', left: '5.5%'}} />
        <span style={{position: 'absolute', 
                      fontSize: '1.3vw', 
                      top: '36.8vw', 
                      left: '8.8vw', 
                      color: 'white', 
                      transform: 'rotateY(358deg) rotateZ(352deg)', 
                      textAlign: 'center', 
                      lineHeight: '2vw'}}
                      >June 17-19<br />&nbsp;11AM-5PM<br />&nbsp;&nbsp;EST<br />&nbsp;&nbsp;&nbsp;<u>Days Left</u><br /><span style={{color: 'white', fontSize: '2vw', display: 'block', marginTop: '0.7vw'}}>&nbsp;&nbsp;&nbsp;{daysLeft}</span>
        </span>

        <div style={{position: 'absolute', fontSize: '4.2vw', fontFamily: 'Alyssum', top: '3.95vw', left: '50%', textAlign: 'center', transform: 'translateX(-50%)'}}>
          <span id='wh-text'>
            WAFFLEHACKS
            <br />
            2022
          </span>
          <span id='remix-text'>THE REMIX</span>
        </div>

        {/* MUSIC PLAYER */}
        <img src={hsign} alt="hanging music sign" style={{position: 'absolute', top: '4.4vw', left: '6.7vw', width: '15.34vw'}} />

        <span style={{position: 'absolute', color: 'white', fontSize: '1.2vw', letterSpacing: '-0.04vw', top: '11vw', left: '10.85vw', textAlign: 'center'}}>NOW PLAYING</span>
        <img src={skip} alt="skip backwards" style={{position: 'absolute', width: '1.095vw', top: '18.59vw', left: '11.2vw', transform: 'scaleX(-1)'}} />
        <img src={play} alt="play button" id='play' style={{position: 'absolute', width: '1.8vw', top: '18.2vw', left: '13.65vw'}}/>
        <img src={skip} alt="skip forwards" style={{position: 'absolute', width: '1.095vw', top: '18.59vw', left: '16.54vw'}} />
        {/* transparent divs that trigger music functions when pressed */}
        <img src={pause} alt='pause button' id='pause' className='hidden' style={{position: 'absolute', width: '1.8vw', height: '1.8vw', top: '18.2vw', left: '13.64vw', borderRadius: '50%'}} />
        <div id='play-pause' style={{position: 'absolute', width: '1.8vw', height: '1.8vw', top: '18.2vw', left: '13.64vw', borderRadius: '50%'}}></div>
        <div id='skip-forward' style={{position: 'absolute', width: '1.9vw', height: '1.9vw', top: '18.16vw', left: '16.15vw', borderRadius: '50%'}}></div>
        <div id='skip-backward' style={{position: 'absolute', width: '1.9vw', height: '1.9vw', top: '18.16vw', left: '10.8vw', borderRadius: '50%'}}></div>
        {/* song title */}
        <span id='song-title' style={{position: 'absolute', background: '#333434', color: 'white', fontSize: '1vw', letterSpacing: '0.06vw', width: '8vw', minHeight: '3.2vw', top: '13.6vw', left: '10.3vw', textAlign: 'center'}}>
          Comfy beats
          <br />
          - Lilypichu
        </span>
        <div id='player' style={{position: 'absolute', bottom: '100%', right: '100%'}}>
          <iframe id='player-sc' title='player-sc' width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1429230328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false">
          </iframe>
        </div>

        <img src={cafegirl} alt="cafe girl"  style={{position: 'absolute', width: '26.6vw', top: '30.6vw', left: '73.4vw'}} />
        <img src={head} alt="girl head" id='girl-head' style={{position: 'absolute', width: '11vw', top: '25.56vw', left: '84vw'}} />
        <img src={cup} alt="tea cup" style={{position: 'absolute', width: '3.65vw', left: '82.9vw', top: '41.6vw'}} />
      </div>
  )
}

export default TopPicture