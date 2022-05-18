import React from "react"
import { Helmet } from "react-helmet"

const Head = ({title, children}) => (
  <Helmet>
    <meta charSet="utf-8"/>
    <title>WaffleHacks {title ? `| ${title}` : ''}</title>

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <meta name="theme-color" content="#ffffff"/>

    {children}
  </Helmet>
);

export default Head;
