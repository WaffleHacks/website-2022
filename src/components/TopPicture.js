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
import canvImg from '../images/chalkboard img.png';

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
  const [indicator, setIndicator] = useState([-100, -100]);
  const [musicTilt, setMusicTilt] = useState(false);
  const [tiltEase, setTiltEase] = useState(false);
  let canvas = useRef(null);
  let enteredCanvas = useRef(false);
  let draggingChalk = useRef(false);
  let chalkPixels = useRef(null);

  let img = new Image();
  img.src = canvImg;
  img.onload = () => {
    let cnv = document.createElement('canvas');
    let ctx = cnv.getContext('2d');
    ctx.drawImage(img, 0, 0);
    // load pixels from canvImg to chalkPixels
    chalkPixels.current = ctx.getImageData(0, 0, 130, 110);
  }


  function dragPlant(e, pos){
    let img = pos.node;
    let mouseX = pos.x - (pos.lastX - img.offsetLeft);
    let mouseY = pos.y - (pos.lastY - img.offsetTop);
    if (mouseX === 0 || mouseY === 0) return;
    let vw = mouseX / window.innerWidth * 100;
    let vh = mouseY / window.innerWidth * 100;
    setPlantOffset([vw, vh]);
  }
  function dropPlant(e, pos){
    let img = pos.node;
    let bound = img.getBoundingClientRect();
    let middlex = bound.x + bound.width / 2;
    let middley = bound.y + bound.height * 0.9;
    let elements = document.elementsFromPoint(middlex, middley);
    let onTable = false;
    for (let el of elements){
      if (el.id === 'tablebounds'){
        if (musicTilt === false) setMusicTilt(5);
        onTable = true;
        setTiltEase(true);
        setTimeout(() => setTiltEase(false), 450);
      }
    }
    if (!onTable){
      setPlantOffset([0, 0]);
      setMusicTilt(false);
    }
  }

  function rotateMusic(e){
    if (musicTilt === false) return;
    // center of rotation is at 14.3vw, 5.5vw
    let cx = window.innerWidth * 0.143;
    let cy = window.innerWidth * 0.055;

    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let angle = Math.atan2(mouseY - cy, mouseX - cx);
    let degrees = angle * (180 / Math.PI) - 90;

    setMusicTilt(degrees);
  }

  function drawOnCanvas(x, y){
    let bounds = canvas.current.getBoundingClientRect();
    let ctx = canvas.current.getContext('2d');
    // set canvas width and height to the size of the bounds
    if (!enteredCanvas.current){
      canvas.current.width = 130;
      canvas.current.height = 110;
      enteredCanvas.current = true;
    }

    x -= bounds.x;
    y -= bounds.y;

    let canvx = Math.round(x / bounds.width * canvas.current.width);
    let canvy = Math.round(y / bounds.height * canvas.current.height);

    let radius = 5;
    let tl = [Math.max(0, canvx - radius), Math.max(0, canvy - radius)];
    let br = [Math.min(canvas.current.width, canvx + radius), Math.min(canvas.current.height, canvy + radius)];
    for (let row = tl[1]; row < br[1]; row++){
      for (let col = tl[0]; col < br[0]; col++){

        let d = Math.sqrt(Math.pow(col - canvx, 2) + Math.pow(row - canvy, 2));
        if (d <= radius){
          for (let i = col; i < br[0] + tl[0] - col; i++){
            let colorStart = row * canvas.current.width * 4 + i * 4;
            let colors = chalkPixels.current.data.slice(colorStart, colorStart + 4);
            ctx.fillStyle=`rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]/255})`;
            ctx.fillRect(i, row, 1, 1);
          }
          continue;
        }
      }
    }
  }

  function dragChalk(e, pos){
    let img = pos.node;
    let mouseX = pos.x - (pos.lastX - img.offsetLeft);
    let mouseY = pos.y - (pos.lastY - img.offsetTop);
    if (mouseX === 0 || mouseY === 0) return;
    
    let vw = mouseX / window.innerWidth * 100;
    let vh = mouseY / window.innerWidth * 100;
    setChalkOffset([vw, vh]);

    for (let el of document.elementsFromPoint(mouseX, mouseY)){
      if (el === canvas.current)drawOnCanvas(mouseX, mouseY);
    }

  }

  return (
    <div id='cafearea' style={divStyles}>
        {/* top image */}
        <img draggable={false} src={cafefloor} alt="floor" style={{position: 'absolute', top: '71%', left: 0, width: '100%'}} />

        {/* BLACKBOARD */}
        <div id='blackboard' style={{position: 'absolute', top: '-12.96vw', left: '50%', width: '45.1vw', transform: 'translateX(-50%)'}}>
          <img src={blackboard} draggable={false} alt="blackboard" style={{width: '45.1vw'}} />

          <div style={{position: 'absolute', fontSize: '4.2vw', fontFamily: 'Alyssum', top: '16.91vw', left: '50%', textAlign: 'center', transform: 'translateX(-50%)'}}>
            <span id='wh-text'>
              WA<span className='bb-glow'>F</span>F<span className='bb-glow'>LEH</span>ACK<span className='bb-glow'>S</span>
              <br />
              2022
            </span>
            <span id='remix-text'>T<span className='bb-glow'>HE R</span>EMIX</span>
          </div>

          <canvas ref={canvas} id='bb-canvas' style={{position: 'absolute', bottom: '2.05vw', left: '1.7vw', width: '13vw', height: '11vw'}}></canvas>
        </div>

        <span style={{position: 'absolute', fontSize: '1.5rem', left: '13.5vw', top: '16vw', transform: 'translate(-50%, -50%)'}}>01100011<br />01101000<br />01100001<br />01101100<br />01101011</span>

        {/* MUSIC PLAYER */}
        <DraggableCore onDrag={rotateMusic}>
          <div id='music-sign' style={{transform: (musicTilt !== false ? `rotateZ(${musicTilt}deg)` : ''), transition: (musicTilt !== false) ? tiltEase ? 'transform 0.4s ease' : '' : 'transform 0.4s ease'}}>
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
        </DraggableCore>
        <div id='player' style={{position: 'absolute', bottom: '100%', right: '100%'}}>
          <iframe id='player-sc' title='player-sc' width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1429230328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false">
          </iframe>
        </div>

        {/* OTHER STUFF */}
        <img src={bookcase} draggable={false} alt="bookcase" style={{position: 'absolute', bottom: '15.3vw', left: '-1.75vw', width: '8.45vw'}} />
        <img src={shelf} draggable={false} alt="top shelf" style={{position: 'absolute', top: '7.62vw', right: '1.78vw', width: '18.2vw'}} />
        <img src={shelf} draggable={false} alt="bottom shelf" style={{position: 'absolute', top: '16.84vw', right: '7.985vw', width: '18.2vw'}} />
        <DraggableCore onDrag={dragPlant} onStop={dropPlant}>
          <img src={plant}
               draggable={false}
               alt="shelf plant"
               style={{position: 'absolute', top: (plantOffset[1] || '1.1') + 'vw', left: (plantOffset[0] || '93.36') + 'vw', width: '5.51vw', zIndex: 200}} />
        </DraggableCore>
        <img src={floorplant_shadow} draggable={false} alt="potted plant shadow" style={{position: 'absolute', bottom: '12.42vw', left: '25.7vw', width: '11.6vw'}} />
        <img src={pottedplant} draggable={false} alt="potted plant" style={{position: 'absolute', bottom: '13.42vw', left: '19.15vw', width: '9.92vw'}}/>
        <img src={display} draggable={false} alt="dessert display" style={{position: 'absolute', top: '21.34vw', left: '50%', width: '41.5vw', transform: 'translateX(-50%)'}} />

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
                      >June 17-19<br />&nbsp;5PM-5PM<br />&nbsp;&nbsp;EST<br />&nbsp;&nbsp;&nbsp;<u>Days Left</u><br /><span style={{color: 'white', fontSize: '2vw', display: 'block', marginTop: '0.7vw'}}>&nbsp;&nbsp;&nbsp;{daysLeft}</span>
          </span>
        </div>

        {/* CAFE GIRL */}
        <div id='tablebounds' style={{position: 'absolute', left: '73.8vw', top: '40.6vw', width: '17.1vw', height: '7.8vw', borderRadius: '50%', transform: 'rotateZ(3deg)'}}></div>
        <img src={pottedplant} alt="potted plant 2" draggable={false} style={{position: 'absolute', bottom: '11vw', left: '92vw', width: '9.92vw', transform: 'scaleX(-1)'}}/>
        <img src={cafegirl} alt="cafe girl"  draggable={false} style={{position: 'absolute', width: '26.6vw', top: '30.6vw', left: '73.4vw'}} />
        <img src={head} alt="girl head" draggable={false} id='girl-head' style={{position: 'absolute', width: '11vw', top: '25.56vw', left: '84vw'}} />
        <img src={cup} alt="tea cup" draggable={false} style={{position: 'absolute', width: '3.65vw', left: '82.9vw', top: '41.6vw'}} />

        <DraggableCore handle='.handle' onStart={() => {draggingChalk.current = true;}} onDrag={dragChalk} onStop={() => {draggingChalk.current = false;}}>
          <div className='handle' style={{position: 'absolute', background: 'white', width: '1.15vw', height: '0.3vw', left: (chalkOffset[0] || '9.78') + 'vw', top: (chalkOffset[1] || '48.75') + 'vw', borderRadius: '0.15vw', transform:'rotateZ(-6.5deg)'}}></div>
        </DraggableCore>

        <a id="mlh-trust-badge" style={{display:"block", maxWidth:"100px", minWidth:"60px", position:"fixed", right:"8vw", top:0, width:"10%", zIndex:10000}} href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=black" target="_blank" rel="noreferrer">
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-black.svg" alt="Major League Hacking 2022 Hackathon Season" style={{width:"100%"}} />
        </a>

        <div style={{position: 'absolute', left: indicator[0] + 'vw', top: indicator[1] + 'vw', width: '1vw', height: '1vw', background: 'rgba(255, 255, 255, 0.8)', zIndex: 1000}}></div>
    </div>
  )
}

export default TopPicture