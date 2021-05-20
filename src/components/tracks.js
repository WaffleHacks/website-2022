import React from "react"

import Card from "./card"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query Tracks {
    allStrapiTrack {
      nodes {
        id
        description
        name
        image {
          publicURL
        }
        guiding_question {
          content
          id
        }
      }
    }
  }
`

const Tracks = () => {
  const {
    allStrapiTrack: { nodes: tracks },
  } = useStaticQuery(query)

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
          Tracks
        </h3>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>

        {tracks.map(track => (
          <Card
            header={track.name}
            content={track.description}
            questions={track.guiding_question}
            key={track.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Tracks
