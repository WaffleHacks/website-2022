import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ASSET_URL } from "../constants"

const query = graphql`
  query HomePage {
    directus {
      homepage {
        description
        description_image {
          id
        }
        origin
        origin_image {
          id
        }
      }
    }
  }
`

const Description = () => {
  const {
    directus: { homepage },
  } = useStaticQuery(query)

  return (
    <section className="bg-white py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          WaffleHacks
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Our Origin
            </h3>
            <div
              className="text-gray-600 mb-8"
              dangerouslySetInnerHTML={{ __html: homepage.origin }}
            />
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img
              className="w-auto sm:h-80 mx-auto"
              src={`${ASSET_URL}/${homepage.origin_image.id}`}
              alt="placeholder"
            />
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img
              className="w-auto sm:h-80 mx-auto"
              src={`${ASSET_URL}/${homepage.description_image.id}`}
              alt="placeholder"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                What is WaffleHacks
              </h3>
              <div
                className="text-gray-600 mb-8"
                dangerouslySetInnerHTML={{ __html: homepage.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
