import * as React from 'react'
import { useRef, useState } from 'react'
import { DraggableCore } from 'react-draggable';
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
  
  const [displayDrag, setDisplayDrag] = useState(false);
  const [chalkOffset, setChalkOffset] = useState([0, 0]);
  const [plantOffset, setPlantOffset] = useState([0, 0]);
  let seed = useRef(null);

  function shelfPlantDblClick(e){
    e.preventDefault();
    seed.current.classList.add('activated');
    setInterval(() => setDisplayDrag(true), 10000)
  }

  function dragPlant(e, pos){
    let img = pos.node;
    let mouseX = pos.x - (pos.lastX - img.offsetLeft);
    let mouseY = pos.y - (pos.lastY - img.offsetTop);
    if (mouseX === 0 || mouseY === 0) return;
    let vw = mouseX / window.innerWidth * 100;
    let vh = mouseY / window.innerWidth * 100;
    console.log(pos)
    setPlantOffset([vw, vh]);
  }

  function dragChalk(e, pos){
    let img = pos.node;
    let mouseX = pos.x - (pos.lastX - img.offsetLeft);
    let mouseY = pos.y - (pos.lastY - img.offsetTop);
    if (mouseX === 0 || mouseY === 0) return;
    let vw = mouseX / window.innerWidth * 100;
    let vh = mouseY / window.innerWidth * 100;
    setChalkOffset([vw, vh]);
    // return false;
  }

  return (
    <div id='cafearea' style={divStyles}>
        {/* top image */}
        <img draggable={false} src={cafefloor} alt="floor" style={{position: 'absolute', top: '71%', left: 0, width: '100%'}} />

        {/* BLACKBOARD */}
        <div id='blackboard' style={{position: 'absolute', top: '-12.96vw', left: '50%', width: '45.1vw', transform: 'translateX(-50%)'}}>
          <img src={blackboard} draggable={false} alt="blackboard" style={{width: '45.1vw'}} />
          <div draggable={false} style={{position: 'absolute', fontSize: '4.2vw', fontFamily: 'Alyssum', top: '16.91vw', left: '50%', textAlign: 'center', transform: 'translateX(-50%)'}}>
            <span id='wh-text'>
              WA<span className='bb-glow'>F</span>F<span className='bb-glow'>LEH</span>ACK<span className='bb-glow'>S</span>
              <br />
              2022
            </span>
            <span id='remix-text'>THE REMIX</span>
          </div>
        </div>

        {/* MUSIC PLAYER */}
        <div id='music-sign' style={{position: 'absolute', top: '4.4vw', left: '6.7vw', width: '15.34vw', height: '5vw', textAlign: 'center', color: 'white'}}>
          <img src={hsign} draggable={false} alt="hanging music sign" style={{width: '15.34vw'}} />
          <span style={{position: 'absolute', color: 'white', fontSize: '1.2vw', letterSpacing: '-0.04vw', top: '6.65vw', left: '50%', transform: 'translateX(-50%)'}}>NOW PLAYING</span>
          <span id='song-title' style={{position: 'absolute', background: '#333434', color: 'white', fontSize: '1vw', letterSpacing: '0.06vw', width: '8vw', minHeight: '3.2vw', top: '9.2vw', left: '3.6vw', textAlign: 'center'}}>
            Comfy beats
            <br />
            - Lilypichu
          </span>

          <img src={skip} draggable={false} alt="skip backwards" style={{position: 'absolute', width: '1.095vw', top: '14.19vw', left: '4.5vw', transform: 'scaleX(-1)'}} />
          <img src={play} draggable={false} alt="play button" id='play' style={{position: 'absolute', width: '1.8vw', top: '13.8vw', left: '6.95vw'}}/>
          <img src={skip} draggable={false} alt="skip forwards" style={{position: 'absolute', width: '1.095vw', top: '14.19vw', left: '9.84vw'}} />
          <img src={pause} draggable={false} alt='pause button' id='pause' className='hidden' style={{position: 'absolute', width: '1.8vw', top: '13.8vw', left: '6.95vw'}} />
          
          <div id='play-pause' style={{position: 'absolute', width: '1.8vw', height: '1.8vw', top: '13.8vw', left: '6.94vw', borderRadius: '50%'}}></div>
          <div id='skip-forward' style={{position: 'absolute', width: '1.9vw', height: '1.9vw', top: '13.76vw', left: '9.45vw', borderRadius: '50%'}}></div>
          <div id='skip-backward' style={{position: 'absolute', width: '1.9vw', height: '1.9vw', top: '13.76vw', left: '4.1vw', borderRadius: '50%'}}></div>
        </div>
        
        <div id='player' style={{position: 'absolute', bottom: '100%', right: '100%'}}>
          <iframe id='player-sc' title='player-sc' width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1429230328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false">
          </iframe>
        </div>

        {/* OTHER STUFF */}
        <img src={bookcase} draggable={false} alt="bookcase" style={{position: 'absolute', bottom: '15.3vw', left: '-1.75vw', width: '8.45vw'}} />
        <img src={shelf} draggable={false} alt="top shelf" style={{position: 'absolute', top: '7.62vw', right: '1.78vw', width: '18.2vw'}} />
        <div id='seed' ref={seed}></div>
        <img src={shelf} draggable={false} alt="bottom shelf" style={{position: 'absolute', top: '16.84vw', right: '7.985vw', width: '18.2vw'}} />
        <DraggableCore>
          <img src={plant} 
               draggable={false}
               alt="shelf plant"
               // left: (chalkOffset[0] || '9.78') + 'vw', top: (chalkOffset[1] || '48.75') + 'vw'
               style={{position: 'absolute', top: (plantOffset[1] || '1.1') + 'vw', left: (plantOffset[0] || '93.36') + 'vw', width: '5.51vw'}} />
        </DraggableCore>
        <img src={floorplant_shadow} draggable={false} alt="potted plant shadow" style={{position: 'absolute', bottom: '12.42vw', left: '25.7vw', width: '11.6vw'}} />
        <img src={pottedplant} draggable={false} alt="potted plant" style={{position: 'absolute', bottom: '13.42vw', left: '19.15vw', width: '9.92vw'}}/>
        
        {
          // displayDrag ?
          //   <DraggableCore 
          //       handle='.handle' 
          //       defaultPosition={{x: window.innerWidth*0.2925, y: window.innerWidth*0.2134}}
          //       axis='x'>
          //     <div  style={{width: '41.5vw'}}>
          //       <img src={display} alt="dessert display" style={{width: '41.5vw'}}draggable={false} />
          //       <div className='handle' style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></div>
          //     </div>
          //   </DraggableCore>
          //   :
            <img src={display} draggable={false} alt="dessert display" style={{position: 'absolute', top: '21.34vw', left: '50%', width: '41.5vw', transform: 'translateX(-50%)'}} />
        }

        {/* FLOOR SIGN */}
        <div style={{position: 'absolute', width: '14.5vw', top: '34.8vw', left: '5.5vw'}}>
          <img draggable={false} src={sign} alt="floor sign" style={{width: '14.5vw'}} />
          <span style={{position: 'absolute', 
                      fontSize: '1.3vw', 
                      top: '2vw', 
                      left: '3.3vw', 
                      color: 'white', 
                      transform: 'rotateY(358deg) rotateZ(352deg)', 
                      textAlign: 'center', 
                      lineHeight: '2vw'}}
                      >June 17-19<br />&nbsp;11AM-5PM<br />&nbsp;&nbsp;EST<br />&nbsp;&nbsp;&nbsp;<u>Days Left</u><br /><span style={{color: 'white', fontSize: '2vw', display: 'block', marginTop: '0.7vw'}}>&nbsp;&nbsp;&nbsp;{daysLeft}</span>
          </span>
        </div>

        {/* CAFE GIRL */}
        <img src={pottedplant} alt="potted plant 2" draggable={false} style={{position: 'absolute', bottom: '11vw', left: '92vw', width: '9.92vw', transform: 'scaleX(-1)'}}/>
        <img src={cafegirl} alt="cafe girl"  draggable={false} style={{position: 'absolute', width: '26.6vw', top: '30.6vw', left: '73.4vw'}} />
        <img src={head} alt="girl head" draggable={false} id='girl-head' style={{position: 'absolute', width: '11vw', top: '25.56vw', left: '84vw'}} />
        <img src={cup} alt="tea cup" draggable={false} style={{position: 'absolute', width: '3.65vw', left: '82.9vw', top: '41.6vw'}} />

        <DraggableCore handle='.handle' onDragStart={() => {}} onDrag={dragChalk} onDragEnd={() => {}}>
          <div className='handle' style={{position: 'absolute', background: 'white', width: '1.15vw', height: '0.3vw', left: (chalkOffset[0] || '9.78') + 'vw', top: (chalkOffset[1] || '48.75') + 'vw', borderRadius: '0.15vw', transform:'rotateZ(-6.5deg)'}}></div>
        </DraggableCore>

        <a id="mlh-trust-badge" style={{display:"block", maxWidth:"100px", minWidth:"60px", position:"fixed", right:"8vw", top:0, width:"10%", zIndex:10000}} href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=black" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-black.svg" alt="Major League Hacking 2022 Hackathon Season" style={{width:"100%"}} /></a>
    </div>
  )
}

export default TopPicture