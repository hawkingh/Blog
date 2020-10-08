import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="khosoda" keywords={[`khosoda`, `hawking_h`, `hawkingh`, "keiga hosoda"]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
