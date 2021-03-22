import React from "react"
import { useLocation } from "@reach/router"

import waffleLogo from "../images/waffle-logo.png"

const activeLinkCss = "inline-block py-2 px-4 text-black font-bold no-underline"
const inactiveLinkCss =
  "inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"

const HeaderLink = ({ path, name }) => {
  const location = useLocation()
  return (
    <li className="mr-3">
      <a
        className={location.pathname === path ? activeLinkCss : inactiveLinkCss}
        href={location.pathname === path ? "#" : path}
      >
        {name}
      </a>
    </li>
  )
}

const Header = () => (
  <nav
    id="header"
    className="fixed w-full z-30 top-0 text-white bg-white shadow"
  >
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div className="pl-4 flex items-center">
        <a
          className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800"
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

      <div className="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <HeaderLink path="/" name="Home" />
          <HeaderLink path="/schedule" name="Schedule" />
          <HeaderLink path="/sponsors" name="Sponsors" />
        </ul>
        <a
          id="navAction"
          className="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 gradient text-white"
          href="https://apply.wafflehacks.tech"
        >
          Register
        </a>
      </div>
    </div>
  </nav>
)

export default Header
