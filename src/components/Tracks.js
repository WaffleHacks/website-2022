import * as React from "react";
import waffles_img from '../images/waffles.svg';
import entertainment_img from '../images/entertainment.png';
import pointer_sign from "../images/pointer_sign.svg";
import healthcare from "../images/healthcare.png";
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
        <StickyNote img={waffles_img} name="Food Insecurity" desc="According to a study by Temple University's Hope Center for College, Community, and Justice, 45% of college students surveyed deal with food insecurity. We encourage your imagination to develop anything that can help reduce this number and give more options/tools for students to get access to food." />
        <StickyNote img={entertainment_img} name="Art and Music" desc="This hack is open-ended, so we encourage you to use your imagination to develop anything that incorporates art or music. Entertaining forms of art and music have been especially helpful with teaching new skills or broadening ideas. Feel free to get creative!" />
        <StickyNote img={healthcare} name="Healthcare" desc="This hack is open-ended, and we encourage you to think about ways to boost people's health either mentally or physically!" />
        <StickyNote img={connections} name="Connections" desc="For this hack, we encourage you to develop anything related to building connections amongst people whether that means virtually, in person, or more!" />
        </div>
    </center>
  )
}

export default Tracks