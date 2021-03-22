import React from "react"
import PropTypes from "prop-types"

const Card = ({ header, content }) => (
  <div className="w-1/2 md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
      <a
        href="https://www.gatsbyjs.org/"
        className="flex flex-wrap no-underline hover:no-underline"
      >
        <div className="w-full font-bold text-xl text-gray-800 px-6 pt-6">
          {header}
        </div>
        <p className="text-gray-800 text-base px-6 pt-6 mb-5">{content}</p>
      </a>
    </div>
  </div>
)

Card.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
}

export default Card
