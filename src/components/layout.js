import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import SEO from "./seo"

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
    <footer>
    <h1>Socials</h1>
    <a href="https://www.instagram.com/waffle.hacks/">Instagram</a>
    <a href="https://www.facebook.com/WaffleHacks-103974901775671">Facebook</a>
    <a href="https://www.linkedin.com/company/wafflehacks/about/">Linkedin</a>
    </footer>
  </div>
)

Layout.defaultProps = {
  lang: "en",
  keywords: [],
  pageTitle: "WaffleHacks",
  pageDescription: "We're hackers with hearts",
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
}

export default Layout
