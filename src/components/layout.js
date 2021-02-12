import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import SEO from "./seo";

const Layout = ({ children, pageDescription, pageTitle, lang, keywords }) => (
  <div className="leading-normal tracking-normal text-white gradient">
    <SEO
      title={pageTitle}
      description={pageDescription}
      lang={lang}
      keywords={keywords}
    />

    <Header />

    {children}

    <Footer />
  </div>
);

Layout.defaultProps = {
  lang: "en",
  keywords: [],
  pageTitle: "WaffleHacks",
  pageDescription: "We're hackers with hearts",
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
};

export default Layout;
