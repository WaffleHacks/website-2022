import * as React from "react";
import '../index.css'
import landing_page from "../images/landing_page.png";

import bookcase from '../images/bookcase.svg';
import hsign from '../images/hanging sign.png';
import button_sticker from '../images/button_sticker.svg';
import sign from '../images/sign.png';

import Layout from "../components/Layout";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Faq from "../components/Faq";
import Sponsors from "../components/Sponsors";
import Navbar from "../components/Navbar";

// markup
const IndexPage = () => {
  let now = Date.now();
  // make a date for June 17, 2022
  let endDate = new Date(2022, 5, 17);
  let timeLeft = endDate - now;
  let daysLeft = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  return (
    <Layout>
      {/* top image */}
      <img src={landing_page} alt="placeholder" width="100%" />
      <img src={sign} alt="" style={{position: 'absolute', width: '14.5vw', top: '34.8vw', left: '5.5vw'}} />
      <span style={{position: 'absolute',
        fontSize: '1.3vw',
        top: '36.8vw',
        left: '8.8vw',
        color: 'white',
        transform: 'rotateY(358deg) rotateZ(352deg)',
        textAlign: 'center',
        lineHeight: '2vw'}}
      >June 17-19<br />&nbsp;11AM-11PM<br />&nbsp;&nbsp;EST<br />&nbsp;&nbsp;&nbsp;<u>Days Left</u><br /><span style={{color: 'white', fontSize: '2vw', display: 'block', marginTop: '0.7vw'}}>&nbsp;&nbsp;&nbsp;{daysLeft}</span>
      </span>

      {/* navbar */}
      <Navbar items={[
        { href: "#about", name: "about" },
        { href: "#tracks", name: "tracks" },
        { href: "#faq", name: "faqs" },
        { href: "#sponsors", name: "sponsors" },
        { href: "https://apply.wafflehacks.org", name: "apply", external: true }
      ]} />

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

        <a id='apply-btn' href="https://apply.wafflehacks.org" target="_blank" rel="noreferrer">
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
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
