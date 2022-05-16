import * as React from "react";
import pointer_sign from "../images/pointer_sign.svg";
import sponsors_plant from "../images/sponsors_plant.png";
import hyperx from "../images/hyperx.svg";
import wolfram from "../images/wolfram.svg";
import stickermule from "../images/stickermule.svg";
import digitalocean from "../images/digitalocean.svg";
import trimble from "../images/trimble.svg";
import googlecloud from "../images/googlecloud.svg";
import belmont from '../images/belmont.png';


const Sponsors = () => {
  return (
    <center id='sponsors'>
          <div id='sponsors-box' style={{paddingTop: '8rem', paddingBottom: '3rem', position: 'relative'}}>
            <div style={{position: 'absolute', top: '2rem', left: '-2rem'}}>
                <img src={pointer_sign} alt="pointer" style={{height: '3rem'}} />
                <span style={{color: 'white', position: 'absolute', top: '45%', left: '40%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem'}}>SPONSORS</span>
            </div>
            <div className='poppins-light' style={{fontSize: '1.3rem'}}>
              <span>Sponsorships help us immensely in planning and providing the best experience for our attendees.</span>
              <br /><br />
              <span>Shoutout to our amazing sponsors below!</span>
            </div>
            <div id='sponsor-imgs'>
              <h1>VIP</h1>
              <img src={belmont} className='vip' alt="Belmont Data Collaborative" />
              <img src={wolfram} className='vip' alt="Wolfram Alpha" />
              <img src={digitalocean} className='vip' alt="DigitalOcean" />

              <h1>Headliner</h1>
              <img src={hyperx} className='headliner' alt="HyperX" />
              <img src={trimble} className='headliner' alt="Trimble" />

              <h1>Opener</h1>
              <img src={stickermule} className='opener' alt="StickerMule" />
              <img src={googlecloud} className='opener' alt="Trimble" />
              
            </div>
            <div id='sponsor-msg' className='poppins-light'>
              <span>Interested in sponsoring for WaffleHacks 2022? Check out our sponsorship prospectus <a href='https://wffl.link/sponsors'>here</a></span>
              <br /><br />
              <span>Contact <a href="mailto:sponsorships@wafflehacks.org">sponsorships@wafflehacks.org</a> for more information!</span>
            </div>
            <img id='sponsors-plant' src={sponsors_plant} alt="" />
          </div>
      </center>
  )
}

export default Sponsors