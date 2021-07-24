import React, { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"

import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query Tracks {
    directus {
      tracks(sort: "name") {
        description
        name
        id
        questions {
          content
          id
        }
      }
    }
  }
`

const Card = ({ header, content, questions }) => {
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
                    <div className="mt-3 sm:mt-0 sm:ml-4 text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl leading-6 font-medium text-gray-900"
                      >
                        {header}
                      </Dialog.Title>
                      <div className="mt-5">
                        <p
                          className="text-base text-gray-600"
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                        <br />
                        <h5 className="text-xl leading-3 font-medium mb-2">
                          Guiding Questions:
                        </h5>
                        <ul className="list-disc">
                          {questions.map(q => (
                            <li key={q.id} className="text-gray-600">
                              {q.content}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none ring-2 ring-amber-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
        className="w-1/2 md:w-1/4 p-6 flex flex-col flex-grow flex-shrink text-center"
      >
        <div className="w-full flex-1 bg-white rounded-lg overflow-hidden bg-amber-50 hover:shadow-lg transition-shadow">
          <div className="w-full font-bold text-xl text-gray-800 p-6">
            {header}
          </div>
        </div>
      </button>
    </>
  )
}

const Tracks = () => {
  const {
    directus: { tracks },
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
            questions={track.questions}
            key={track.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Tracks
