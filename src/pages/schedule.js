import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Waves from "../components/waves"

const SchedulePage = () => (
  <Layout>
    <Hero title="Schedule" image={false} />

    <Waves.GradientToWhite />

    <section className="bg-white py-8 xl:px-40 md:px-10">
      <p className="w-full my-2 leading-tight text-center text-gray-800">
        Full schedule coming soon...
      </p>

      <iframe
        title="Schedule Calendar"
        src="https://teamup.com/ksxkiypxtipm78ogv4?date=2021-07-09&view=md&showHeader=0&showProfileAndInfo=0&showSidepanel=1&disableSidepanel=1&showViewSelector=0&showMenu=1&showAgendaHeader=1&showAgendaDetails=0&showYearViewHeader=1"
        width="100%"
        height="800px"
        frameBorder="0"
      />
    </section>
  </Layout>
)

export default SchedulePage
