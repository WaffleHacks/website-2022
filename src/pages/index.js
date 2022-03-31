import * as React from "react";
import '../index.css'
import landing_page from "../images/landing_page.png";
import grid from "../images/grid.svg";

import bookcase from '../images/bookcase.svg';
import hsign from '../images/hanging sign.png';
import button_sticker from '../images/button_sticker.svg';
import hamburger from '../images/menu-icon.svg';

import About from "../components/About";
import Tracks from "../components/Tracks";
import Faq from "../components/Faq";
import Sponsors from "../components/Sponsors";

// styles
const pageStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#DDBC9B",
  backgroundImage: 'url(' + grid + ')'
};

const navStyles = {
  backgroundColor: "#A47556",
  border: "2px solid #FBAD24",
  margin: "0",
};

const navLinkStyles = {
  padding: "0.5em 1em",
  fontSize: "1.5em",
  color: "white",
  textDecoration: "none",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>WaffleHacks</title>
      {/* top image */}
      <img src={landing_page} alt="placeholder" width="100%" />

      {/* navbar */}
      <nav style={navStyles}>
        <div id='nav-lg' style={{display: 'flex', justifyContent: "center"}}>
          <a href="#about" style={navLinkStyles}>
            about
          </a>
          <a href="#tracks" style={navLinkStyles}>
            tracks
          </a>
          <a href="#faq" style={navLinkStyles}>
            faqs
          </a>
          <a href="#sponsors" style={navLinkStyles}>
            sponsors
          </a>
          <a href="#apply" style={navLinkStyles}>
            apply
          </a>
        </div>

        {/* <div id='nav-sm' style={{justifyContent: "center", alignItems: 'center'}}>
          <a href="#about" style={navLinkStyles}>
            about
          </a>
          <img src={hamburger} alt="menu" style={{width: '1.75rem'}} />
        </div> */}
      </nav>

      {/* about */}
      <About />

       {/* tracks */}
       <Tracks />

       {/* faq */}
       <Faq />

       {/* Sponsors */}
       <Sponsors />

       {/* Apply */}
       <div id='apply' style={{height: '45vw', width: '100vw', position: 'relative', marginTop: '-3rem'}}>
         <img src={bookcase} alt="bookcase" style={{
           position: 'absolute',
           bottom: 0,
           left: '-10px',
           height: '60%'
         }} />
         <img src={bookcase} alt="bookcase" style={{
           position: 'absolute',
           bottom: 0,
           right: '-10px',
           height: '60%',
           transform: 'scaleX(-1)'
         }} />
         <img src={hsign} alt="bookcase" style={{
           position: 'absolute',
           top: '20%',
           right: '25%',
           height: '40%',
         }} />

         <span className='poppins-bold' style={{
           position: 'absolute',
           top: '30%',
           left: '18%',
           height: '40%',
           fontSize: '8vw',
           textAlign: 'left',
           fontWeight: 'bolder',
           color: '#543E2E'
         }}>
           APPLY<br />TODAY!
         </span>

         <div style={{
            position: 'absolute',
            bottom: '6%',
            left: '50%',
            transform: 'translateX(-50%)'
           }}>
           <img src={button_sticker} alt="" style={{width: '15rem'}} />
           <span style={{
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
              fontSize: '2.5rem',
              color: '#543E2E'
            }}>
              apply
           </span>
         </div>
       </div>

       {/* Footer */}
       <div style={{
         width: '100%',
         padding: '1rem 0',
         textAlign: 'center',
         fontSize: '1rem',
         color: 'white',
         background: '#A47556'
       }}>
         WAFFLEHACKS 2022
       </div>
    </main>
  );
};

export default IndexPage;
