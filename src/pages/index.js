import React from "react"
import { Box } from "@chakra-ui/react"
import SEO from "../components/seo"
import Categories from "../components/Categories"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Box>Hello World</Box>
    <Categories />
  </>
)

export default IndexPage
