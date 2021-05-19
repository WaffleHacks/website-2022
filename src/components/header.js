import React, { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { useLocation } from "@reach/router"

import waffleLogo from "../images/waffle-logo.png"

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Schedule",
    path: "/schedule",
  },
  {
    name: "Sponsors",
    path: "/sponsors",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const HeaderLink = ({ path, name, inline = true, withList = true }) => {
  const location = useLocation()
  const content = (
    <a
      className={classNames(
        location.pathname === path
          ? "font-bold"
          : "hover:text-gray-800 hover:text-underline",
        inline ? "inline-block" : "block",
        "py-2 px-4 text-black no-underline"
      )}
      href={location.pathname === path ? "#" : path}
    >
      {name}
    </a>
  )

  if (withList) return <li className="mr-3">{content}</li>
  return content
}

// Collapsible nav for smaller devices
const SmallNav = () => (
  <Menu as="div" className="relative inline-block text-left">
    {({ open }) => (
      <>
        <div>
          <Menu.Button
            className={classNames(
              "inline-flex justify-center w-full rounded-md border-none px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none",
              open
                ? "ring-2 ring-offset-2 ring-offset-gray-100 ring-amber-600"
                : ""
            )}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Menu.Button>
        </div>

        <Transition
          show={open}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            static
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              {links.map(link => (
                <Menu.Item>
                  <HeaderLink {...link} withList={false} inline={false} />
                </Menu.Item>
              ))}
              <Menu.Item>
                <a
                  id="navAction"
                  className="mx-4 mb-2 hover:underline font-bold rounded-full py-2 px-4 shadow opacity-75 gradient text-white text-sm text-center block"
                  href="https://apply.wafflehacks.tech"
                >
                  Register
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </>
    )}
  </Menu>
)

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
        <SmallNav />
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          {links.map(link => (
            <HeaderLink {...link} />
          ))}
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
