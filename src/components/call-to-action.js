import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { DateTime } from "luxon"

import Countdown from "./countdown"

const query = graphql`
  query Countdown {
    directus {
      homepage {
        countdown_to
      }
    }
  }
`

const CallToAction = () => {
  const {
    directus: {
      homepage: { countdown_to },
    },
  } = useStaticQuery(query)

  const parsed = DateTime.fromISO(countdown_to).toLocal();
  const completed = parsed < DateTime.local();

  const countdown = (
    <>
      <Countdown time={countdown_to} />

      <br />
      <a
        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        href="https://apply.wafflehacks.tech"
      >
        Register
      </a>
    </>
  )

  return (
    <section className="container mx-auto text-center pt-8 pb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        WaffleHacks
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
      </div>

      {completed ? <p className="text-xl h-3 pb-12">Registration has closed.<br/>We look forward to seeing you next year!</p> : countdown}
    </section>
  )
}

export default CallToAction
