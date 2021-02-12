import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO = ({ description, lang, keywords, title }) => {
  const data = useStaticQuery(query);
  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
