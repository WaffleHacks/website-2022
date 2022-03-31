import * as React from "react";
import pointer_sign from "../images/pointer_sign.svg";
import sponsors_img from "../images/sponsors.png";
import sponsors_plant from "../images/sponsors_plant.png";
import amazon from "../images/amazon.png";
import hyperx from "../images/hyperx.png";
import replit from "../images/replit.svg";
import wolfram from "../images/wolfram.png";
import wafflelogo from "../images/wafflelogo.png";


const Sponsors = () => {
  return (
    <center id='sponsors'>
          <div id='sponsors-box' style={{paddingTop: '8rem', paddingBottom: '3rem', position: 'relative'}}>
            <div style={{position: 'absolute', top: '2rem', left: '-2rem'}}>
                <img src={pointer_sign} alt="pointer" style={{height: '3rem'}} />
                <span style={{color: 'white', position: 'absolute', top: '45%', left: '40%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem'}}>SPONSORS</span>
            </div>
            <div className='poppins-light' style={{fontSize: '1.3rem', marginBottom: '4rem'}}>
              <span>Sponsorships help us immensely in planning and providing the best experience for our attendees.</span>
              <br /><br />
              <span>Shoutout to our amazing sponsors below!</span>
            </div>
            <div id='sponsor-imgs'>
              <img src={amazon} alt="Amazon" />
              <img src={replit} alt="Replit" />
              <img src={hyperx} alt="HyperX" />
              <img src={wolfram} alt="Wolfram Alpha" />
              <img src={wafflelogo} alt="WaffleHacks" />
              {/* <img src={sponsors_img} alt="" style={{width: '90%'}} /> */}
            </div>
            <div id='sponsor-msg' className='poppins-light'>
              <span>Interested in sponsoring for WaffleHacks 2022? Check out our sponsorship prospectus here:</span>
              <br /><br />
              <span>Contact <a href="mailto:sponsorships@wafflehacks.org">sponsorships@wafflehacks.org</a> for more information!</span>
            </div>
            <img id='sponsors-plant' src={sponsors_plant} alt="" />
          </div>
      </center>
  )
}

export default Sponsors