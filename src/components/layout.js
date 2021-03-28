import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import SEO from "./seo"
import Footer from "./footer"

const FOOTER_CATEGORIES = [
  {
    header: "Socials",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/waffle.hacks/",
        newTab: true,
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/WaffleHacks-103974901775671",
        newTab: true,
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/company/wafflehacks/about/",
        newTab: true,
      },
    ],
  },
  {
    header: "Navigation",
    links: [
      {
        name: "Home",
        link: "/",
        newTab: false,
      },
      {
        name: "Schedule",
        link: "/schedule",
        newTab: false,
      },
      {
        name: "Sponsors",
        link: "/sponsors",
        newTab: false,
      },
      {
        name: "Register",
        link: "https://apply.wafflehacks.tech",
        newTab: true,
      },
    ],
  },
]

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

    <Footer categories={FOOTER_CATEGORIES} />
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
