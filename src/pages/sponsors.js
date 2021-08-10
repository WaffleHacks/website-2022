import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Waves from "../components/waves"

const TIER_SETTINGS = {
  // TODO: update the logo sizes
  LOGO_HEIGHT: {
    platinum: 150,
    silver: 50,
  },
  GRID_SIZE: {
    platinum: "grid-cols-1",
    silver: "grid-cols-2",
  },
}

const query = graphql`
  query Sponsors {
    directus {
      fields {
        prospectus {
          id
          imageFile {
            publicURL
          }
        }
      }
      sponsors(sort: "priority") {
        id
        name
        tier
        url
        logo {
          id
          imageFile {
            publicURL
          }
        }
      }
    }
  }
`

const Header = ({ title }) => (
  <>
    <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
      {title}
    </h2>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
  </>
)

const Sponsor = ({ tier, name, url, logo }) => (
  <>
    <div className="p-2 flex justify-center items-center">
      <a href={url} target="_blank" rel="noreferrer">
        <img
          src={logo.imageFile.publicURL}
          alt={`${name}'s logo`}
          style={{ height: TIER_SETTINGS.LOGO_HEIGHT[tier] }}
        />
      </a>
    </div>
  </>
)

const SponsorsSection = ({ sponsors, tier }) => (
  <>
    <Header title={tier.charAt(0).toUpperCase() + tier.slice(1)} />
    {sponsors.length === 0 && (
      <p className="text-center text-gray-800">Be the first {tier} sponsor!</p>
    )}
    <div className={`grid ${TIER_SETTINGS.GRID_SIZE[tier]} gap-4`}>
      {sponsors.map(s => (
        <Sponsor {...s} key={s.name} />
      ))}
    </div>
  </>
)

const SponsorsPage = () => {
  // Get a list of all our sponsors
  const {
    directus: {
      fields: { prospectus },
      sponsors: ungrouped,
    },
  } = useStaticQuery(query)

  // Extract the sponsor groups
  const sponsors = { platinum: [], silver: [] }
  if (ungrouped !== null)
    for (const sponsor of ungrouped) sponsors[sponsor.tier].push(sponsor)

  return (
    <Layout>
      <Hero title="Sponsors" image={false} />

      <Waves.GradientToWhite />

      <section className="bg-white py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <p className="w-full my-2 leading-tight text-center text-gray-800">
            Want to become a sponsor? Check out our&nbsp;
            <a
              className="text-yellow-600"
              href={prospectus.imageFile.publicURL}
              rel="noreferrer"
              target="_blank"
            >
              prospectus
            </a>
            !
          </p>

          <br />
          <br />

          {Object.keys(sponsors).map(k => (
            <Fragment key={k}>
              <SponsorsSection sponsors={sponsors[k]} tier={k} />
              <br />
            </Fragment>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default SponsorsPage
