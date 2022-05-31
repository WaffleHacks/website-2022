import * as React from "react";
import '../index.css'

import grid from "../images/grid.svg";

import TopPicture from "../components/TopPicture";
import Navbar from '../components/Navbar';
import About from "../components/About";
import Tracks from "../components/Tracks";
import Faq from "../components/Faq";
import Calendar from "../components/Calendar";
import Sponsors from "../components/Sponsors";
import Apply from '../components/Apply';
import Footer from '../components/Footer';
import Head from "../components/Head";

// styles
const pageStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignContent: 'flex-start',
  backgroundColor: "#DDBC9B",
  backgroundImage: 'url(' + grid + ')',
};

// markup
const IndexPage = () => {
  return (
    <>
      <Head>
        <script src="/script.js" type="text/javascript"/>
      </Head>

      <main style={pageStyles}>
        <TopPicture />

        {/* navbar */}
        <Navbar />

        <div id='content'>

          <About />

          <Tracks />

          <Faq />

          <Calendar />

          <Sponsors />
          
          <Apply />

        </div>

        <Footer />
        
      </main>
    </>
  );
};

export default IndexPage;
