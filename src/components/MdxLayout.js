import * as React from "react";

import grid from "../images/grid.svg"
import "./mdx-layout.css";

import Navbar from "./Navbar";
import Footer from "./Footer"

const pageStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#DDBC9B",
  backgroundImage: 'url(' + grid + ')',
  paddingBottom: '2rem',
};

const MdxLayout = ({ children }) => (
  <>
    <title>WaffleHacks</title>

    <main style={pageStyles}>
      <Navbar items={[
        { href: "/", name: "home" },
        { href: "https://apply.wafflehacks.org", name: "apply", external: true }
      ]} />

      <div className="content">
        {children}
      </div>
    </main>

    <Footer/>
  </>
);

export default MdxLayout;
