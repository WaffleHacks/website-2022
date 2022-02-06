import * as React from "react";
import landing_page from "../images/landing_page.png";

// styles
const pageStyles = {
  width: "100%",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>WaffleHacks</title>
      <img src={landing_page} alt="placeholder" width="100%" />
    </main>
  );
};

export default IndexPage;
