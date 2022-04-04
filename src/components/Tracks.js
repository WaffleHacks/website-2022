import * as React from "react";
import waffles_img from '../images/waffles.svg';
import sustainability_img from '../images/sustainability.svg';
import entertainment_img from '../images/entertainment.png';
import pointer_sign from "../images/pointer_sign.svg";
import stethoscope from "../images/stethoscope.png";
import diversity from "../images/diversity.png";
import connections from "../images/connections.png";

import StickyNote from "./StickyNote";


const Tracks = () => {
  return (
    <center id='tracks'>
        <div id='tracks-box' style={{paddingTop: '8rem', paddingBottom: '3rem'}}>
        <div style={{position: 'absolute', top: '2rem', left: '-2rem'}}>
            <img src={pointer_sign} alt="pointer" style={{height: '3rem'}} />
            <span style={{color: 'white', position: 'absolute', top: '45%', left: '40%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem'}}>TRACKS</span>
        </div>
        <StickyNote img={waffles_img} name="Food Insecurity" desc="Food insecurity description" />
        <StickyNote img={entertainment_img} name="Art and Music" desc="Art and music description" />
        <StickyNote img={stethoscope} name="Healthcare" desc="Healthcare description" />
        <StickyNote img={connections} name="Connections" desc="Connections description" />
        <StickyNote img={sustainability_img} name="Cozy Theme UI/UX" desc="Cozy Theme description" />
        <StickyNote img={sustainability_img} name="Diversity &amp; Inclusion" desc="Diversity description" />
        </div>
    </center>
  )
}

export default Tracks