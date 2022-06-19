import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import bookcase2 from '../images/bookcase2.svg';
import hsign from '../images/hanging sign.png';
import button_sticker from '../images/button_sticker.svg';
import hwaffle from '../images/hiddenwaffle.svg';

const Apply = ({ complete }) => {

  const [showModal, setShowModal] = useState(false);
  var hidwaffle = useRef(null);
  var canvas = useRef(null);
  var sparks = useRef([]);
  var timeSinceComplete = useRef(0);

  useEffect(() => {
    if (complete) {
      window.scrollTo(0, document.body.scrollHeight);
      document.getElementById('right-bookcase').style.right = '0';
    }
  }, [complete]);

  useEffect(() => {
    if (showModal) {
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;
      requestAnimationFrame(showSparks);
    }
  }, [showModal]);

  function completeScreen(){
    hidwaffle.current.style.opacity = 0;
    setShowModal(true);
    if (timeSinceComplete.current === 0) timeSinceComplete.current = Date.now();
    setTimeout(() => {
      document.getElementById('complete-modal').style.opacity = 1;
    }, 750);
  }

  function showSparks(){
    if (!canvas.current) return;
    if (Math.random() < 0.25){
      //                         angle,        radius (in vw),       opacity (0.75-1),     width (5-7),     speed (2-3)
      sparks.current.push([Math.random()*2*Math.PI, 60, Math.random() * 0.25 + 0.75, Math.random() * 2 + 5, Math.random() * 0.5 + 1.5])
    }
    // the height of all the sparks is 15
    let rid = [];
    let ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    for (let i = 0; i  < sparks.current.length; i++){
      let [angle, radius, opacity, width, speed] = sparks.current[i];
      radius = canvas.current.width * radius / 100;

      // x = r cos theta
      // y = r sin theta
      let x = radius * Math.cos(angle) + canvas.current.width/2;
      let y = radius * Math.sin(angle) + canvas.current.height/2;
      ctx.fillStyle = `rgba(232, 105, 33, ${opacity})`;
      ctx.beginPath();
      ctx.ellipse(x, y, 0.08 * canvas.current.width, width, angle, 0, 2*Math.PI);
      ctx.fill();

      sparks.current[i][1] -= speed; // decrease radius
      sparks.current[i][4] += 0.01; // increase speed
      if (sparks.current[i][1] <= 0) rid.push(i); // see if the spark should be removed
      sparks.current[i][2] -= 0.025; // decrease opacity
      sparks.current[i][3] = Math.max(sparks.current[i][3] - 0.03, 0); // decrease width
    }
    for (let i = rid.length - 1; i >= 0; i--){
      sparks.current.splice(rid[i], 1);
    }

    // draw text on the canvas
    ctx.font = '2rem "Roboto Mono", monospace';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText('You found the waffle!', canvas.current.width/2, canvas.current.height/2 - 80);

    let timeCompleted = new Date(timeSinceComplete.current);
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let timeCompletedString = `${weekdays[timeCompleted.getUTCDay()]}, ${months[timeCompleted.getUTCMonth()]} ${timeCompleted.getUTCDate()} at ${timeCompleted.getUTCHours()}:${timeCompleted.getUTCMinutes()}:${timeCompleted.getUTCSeconds()} UTC`;
    ctx.fillText(`Completed on ${timeCompletedString}`, canvas.current.width/2, canvas.current.height/2 + 95);
    ctx.fillText(`Take a screenshot and DM it`, canvas.current.width/2, canvas.current.height/2 + 160);
    ctx.fillText(`to an organizer on Discord!`, canvas.current.width/2, canvas.current.height/2 + 210);

    if (showModal){
      requestAnimationFrame(showSparks);
    }
  }

  function closeModal(){
    if (Date.now() - timeSinceComplete.current < 1000) return;
    document.getElementById('complete-modal').style.opacity = 0;
    hidwaffle.current.style.opacity = 1;
    setTimeout(() => {
      setShowModal(false);
    }, 400);
    
  }
  
  return (
    <>
    <div id='apply'>
        {/* left bookcase */}
        <img src={bookcase2} draggable={false} alt="bookcase" id='left-bookcase' />
        {/* right bookcase */}
        <div id='right-bookcase' className={complete ? 'active' : ''}>
            <img src={bookcase2} draggable={false} alt="bookcase" style={{height: '100%'}}  />
            {
              complete && <img src={hwaffle} alt="waffle" id='hidden-waffle' ref={hidwaffle} onClick={completeScreen} style={{width: '2.3vw', position: 'absolute', left: '0.4vw', bottom: '0.81vw'}}/>
            }
        </div>
        {/* hanging sign */}
        <img src={hsign} alt="hanging sign" id='hanging-sign' />
        {/* apply today button */}
        <span id='apply-today' className='poppins-bold'>
          APPLY<br />TODAY!
        </span>

        <a id='apply-btn'>
          <img src={button_sticker} alt="" style={{width: '15rem', cursor: 'pointer'}} />
          <span style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            fontSize: '2.5rem',
            color: '#543E2E',
            cursor: 'pointer'
          }} >
            <s>apply</s>
          </span>
        </a>
    </div>
    {
          showModal && (
            <div id='complete-modal' onClick={closeModal}>
              <canvas id='complete-sparks' ref={canvas}></canvas>
              <div className='round-waffle'>
                <span></span>
              </div>
            </div>
          )
        }
    </>
  )
}

export default Apply