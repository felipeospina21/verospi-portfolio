import React from "react"
import { Box } from "@chakra-ui/react"
import SEO from "../components/seo"
import Categories from "../components/Categories"
// import NoviasTemplate from "../templates/noviasTemplate"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Box>Hello World</Box>
    <Categories />
  </>
)

export default IndexPage
