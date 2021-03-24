import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Waves from "../components/waves"

const TIER_SETTINGS = {
  // TODO: update the logo sizes
  LOGO_HEIGHT: {
    platinum: 750,
    gold: 500,
    silver: 250,
    bronze: 100,
  },
  GRID_SIZE: {
    platinum: "grid-cols-1",
    gold: "grid-cols-2",
    silver: "grid-cols-3",
    bronze: "grid-cols-4",
  },
}

const query = graphql`
  query Sponsors {
    file(name: { eq: "sponsorship-package" }) {
      publicURL
    }
    allStrapiSponsor {
      group(field: tier) {
        nodes {
          tier
          logo {
            publicURL
          }
          name
          url
        }
        fieldValue
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

// TODO: design company logo
const Sponsor = ({ tier, name, url, logo: { publicURL: logoURL } }) => (
  <>
    <div>
      <img
        src={logoURL}
        alt={`${name}'s logo`}
        style={{ height: TIER_SETTINGS.LOGO_HEIGHT[tier] }}
      />
      <a
        href={url}
        className="text-yellow-600"
        target="_blank"
        rel="noreferrer"
      >
        {name}
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
        <Sponsor {...s} />
      ))}
    </div>
  </>
)

const SponsorsPage = () => {
  // Get a list of all our sponsors
  const {
    allStrapiSponsor: { group: rawGroups },
    file: { publicURL: prospectusURL },
  } = useStaticQuery(query)

  // Extract the sponsor groups
  const sponsors = { platinum: [], gold: [], silver: [], bronze: [] }
  for (const group of rawGroups)
    sponsors[group.fieldValue] = group.nodes.filter(
      n => n.name.toLowerCase() !== "placeholder" // Prevent the placeholder sponsors from being displayed
    )

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
              href={prospectusURL}
              rel="noreferrer"
              target="_blank"
            >
              prospectus
            </a>
            !
          </p>

          <br />
          <br />

          <SponsorsSection sponsors={sponsors.platinum} tier="platinum" />
          <br />
          <SponsorsSection sponsors={sponsors.gold} tier="gold" />
          <br />
          <SponsorsSection sponsors={sponsors.silver} tier="silver" />
          <br />
          <SponsorsSection sponsors={sponsors.bronze} tier="bronze" />
        </div>
      </section>
    </Layout>
  )
}

export default SponsorsPage
