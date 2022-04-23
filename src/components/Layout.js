import * as React from "react";
import grid from "../images/grid.svg";

import Footer from "./Footer";

const pageStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#DDBC9B",
  backgroundImage: 'url(' + grid + ')',
  paddingBottom: '2rem',
};

const Layout = ({ children, title }) => (
  <>
    <title>WaffleHacks {title && ` | ${title}`}</title>

    <main style={pageStyles}>
      {children}
    </main>

    <Footer/>
  </>
);

export default Layout;
