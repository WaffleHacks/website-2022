import * as React from "react";
import '../index.css';
import '../markdown.css'

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

import grid from "../images/grid.svg";
import Footer from '../components/Footer';
import md from '../markdown/privacypolicy.js';

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
const PrivacyPolicy = () => {

    return (
    <main style={pageStyles}>
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
        <div className='markdown' style={{padding: '0 5rem'}}>
            <ReactMarkdown children={md} remarkPlugins={[remarkGfm]}></ReactMarkdown>
        </div>
        <Footer />

    </main>
    );
};

export default PrivacyPolicy;
