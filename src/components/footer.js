import React from "react"
import PropTypes from "prop-types"

import waffleLogo from "../images/waffle-logo.png"

const Footer = ({ categories }) => (
  <footer className="bg-white">
    <div className="container mx-auto px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6">
          <a
            className="text-yellow-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
          >
            <img
              className="h-8 fill-current inline"
              src={waffleLogo}
              alt="Waffle Hacks Logo"
            />
            &nbsp;WaffleHacks
          </a>
        </div>

        {categories.map(category => (
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">{category.header}</p>

            <ul className="list-reset mb-6">
              {category.links.map(link => (
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href={link.link}
                    className="no-underline hover:underline text-gray-600 hover:text-yellow-600"
                    target={link.newTab ? "_blank" : "_self"}
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          link: PropTypes.string,
          newTab: PropTypes.bool,
        })
      ),
    })
  ),
}

export default Footer
