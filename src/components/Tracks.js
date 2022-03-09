import * as React from "react";
import waffles_img from '../images/waffles.svg';
import sustainability_img from '../images/sustainability.svg';
import finance_img from '../images/finance.svg';
import entertainment_img from '../images/entertainment.png';
import pointer_sign from "../images/pointer_sign.svg";

import StickyNote from "./StickyNote";


const Tracks = () => {
  return (
    <center>
        <div id='tracks-box' style={{paddingTop: '8rem', paddingBottom: '3rem'}}>
        <div style={{position: 'absolute', top: '2rem', left: '-2rem'}}>
            <img src={pointer_sign} alt="pointer" style={{height: '3rem'}} />
            <span style={{color: 'white', position: 'absolute', top: '45%', left: '40%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem'}}>TRACKS</span>
        </div>
        <StickyNote img={waffles_img} name="Community" />
        <StickyNote img={finance_img} name="Finance" />
        <StickyNote img={entertainment_img} name="Entertainment" />
        <StickyNote img={sustainability_img} name="Sustainability" />
        </div>
    </center>
  )
}

export default Tracks