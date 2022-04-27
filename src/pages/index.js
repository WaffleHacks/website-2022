import * as React from "react";
import '../index.css'

import grid from "../images/grid.svg";

import bookcase from '../images/bookcase.svg';
import hsign from '../images/hanging sign.png';
import button_sticker from '../images/button_sticker.svg';


import About from "../components/About";
import Tracks from "../components/Tracks";
import Faq from "../components/Faq";
import Sponsors from "../components/Sponsors";
import TopPicture from "../components/TopPicture";

import { useEffect } from "react";

// styles
const pageStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignContent: 'flex-start',
  backgroundColor: "#DDBC9B",
  backgroundImage: 'url(' + grid + ')',
};

const navStyles = {
  backgroundColor: "#A47556",
  border: "2px solid #FBAD24",
  margin: 0,
};

const navLinkStyles = {
  padding: "0.5em 1em",
  fontSize: "1.5em",
  color: "white",
  textDecoration: "none",
};

// markup
const IndexPage = () => {

  useEffect(() => {
    // This runs the script
    const myScript = require('../script.js');
  }, [])
  return (
    <main style={pageStyles}>
      {/* <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet> */}
      <title>WaffleHacks</title>

      <TopPicture />
      
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
       <div id='apply'>
         {/* left bookcase */}
         <img src={bookcase} alt="bookcase" id='left-bookcase' />
         {/* right bookcase */}
         <img src={bookcase} alt="bookcase" id='right-bookcase' />
          {/* hanging sign */}
         <img src={hsign} alt="hanging sign" id='hanging-sign' />
        {/* apply today button */}
         <span id='apply-today' className='poppins-bold'>
           APPLY<br />TODAY!
         </span>

         <div id='apply-btn' onClick={() => window.location.href = 'https://apply.wafflehacks.org'}>
           <img src={button_sticker} alt="" style={{width: '15rem'}} />
           <span style={{
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
              fontSize: '2.5rem',
              color: '#543E2E'
            }} >
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
