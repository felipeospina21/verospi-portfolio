import React from "react"

import Layout from "../components/layout"
import Image from "../components/Image"
import SEO from "../components/seo"
// import NoviasTemplate from "../templates/noviasTemplate"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      Hello World
    </div>
    {/* <NoviasTemplate/> */}
  </Layout>
)

export default IndexPage
