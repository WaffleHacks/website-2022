import * as React from 'react'
import bookcase2 from '../images/bookcase2.svg';
import hsign from '../images/hanging sign.png';
import button_sticker from '../images/button_sticker.svg';

const Apply = () => {
  return (
    <div id='apply'>
         {/* left bookcase */}
         <img src={bookcase2} draggable={false} alt="bookcase" id='left-bookcase' />
         {/* right bookcase */}
         {/* <Draggable> */}
            <div id='right-bookcase'>
                <img src={bookcase2} draggable={false} alt="bookcase" style={{height: '100%'}}  />
            </div>

         {/* </Draggable> */}
          {/* hanging sign */}
         <img src={hsign} alt="hanging sign" id='hanging-sign' />
        {/* apply today button */}
         <span id='apply-today' className='poppins-bold'>
           APPLY<br />TODAY!
         </span>

         <a id='apply-btn' href="https://apply.wafflehacks.org">
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
              apply
           </span>
         </a>
       </div>
  )
}

export default Apply