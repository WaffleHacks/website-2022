import * as React from "react";
import pointer_sign from "../images/pointer_sign.svg";
import sponsors_img from "../images/sponsors.png";
import sponsors_plant from "../images/sponsors_plant.png";

const Sponsors = () => {
  return (
    <center>
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
            <div style={{marginBottom: '4rem'}}>
              <img src={sponsors_img} alt="" style={{width: '90%'}} />
            </div>
            <div className='poppins-light' style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
              <span>Interested in sponsoring for WaffleHacks 2022? Check out our sponsorship prospectus here:</span>
              <br /><br />
              <span>Contact <a href="mailto:sponsorships@wafflehacks.org">sponsorships@wafflehacks.org</a> for more information!</span>
            </div>
            <img src={sponsors_plant} alt="" style={{
                position: 'absolute',
                top: '100%',
                left: '100%',
                transform: 'translateX(-55%) translateY(-80%)',
                width: '10rem'
            }} />
          </div>
      </center>
  )
}

export default Sponsors