import React, { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import PropTypes from "prop-types"

const Card = ({ header, content, short }) => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef()

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          open={open}
          onClose={setOpen}
          as="div"
          static
          initialFocus={cancelButtonRef}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-xl leading-6 font-medium text-gray-900"
                      >
                        {header}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{short}</p>
                        <br />
                        <p className="text-base text-black">{content}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-1/2 md:w-1/4 p-6 flex flex-col flex-grow flex-shrink"
      >
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <div className="w-full font-bold text-xl text-gray-800 px-6 pt-6">
            {header}
          </div>
          <p className="text-gray-800 text-base px-6 pt-6 mb-5">{short}</p>
        </div>
      </button>
    </>
  )
}

Card.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  short: PropTypes.string,
}

export default Card
