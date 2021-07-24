import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Waves from "../components/waves"

const NotFoundPage = () => (
  <Layout pageTitle="Not found">
    <Hero
      title="Not found"
      subtitle="You just found a page that doesn't exist... the sadness."
      image={false}
    />

    <Waves.GradientToWhite />
  </Layout>
)

export default NotFoundPage
