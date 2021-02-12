import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query HomePage {
    strapiHomePage {
      description
      description_image {
        publicURL
      }
      origin
      origin_image {
        publicURL
      }
    }
  }
`;

const Description = () => {
  const {
    strapiHomePage: {
      description,
      description_image: { publicURL: description_image },
      origin,
      origin_image: { publicURL: origin_image },
    },
  } = useStaticQuery(query);

  return (
    <section className="bg-white border-b py-8">
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
            <p className="text-gray-600 mb-8">{origin}</p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img
              className="w-full sm:h-64 mx-auto"
              src={origin_image}
              alt="placeholder"
            />
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img
              className="w-5/6 sm:h-64 mx-auto"
              src={description_image}
              alt="placeholder"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                What is WaffleHacks
              </h3>
              <p className="text-gray-600 mb-8">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
