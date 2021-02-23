import React from "react"
import { graphql } from "gatsby"
import Collections from "../components/Collections"
import SEO from "../components/seo"
import { Box } from "@chakra-ui/react"

export default function noviasPage({ data }) {
  const { allMarkdownRemark: edges } = data

  return (
    <>
      <SEO title="Novias" />
      {/* <Box position="relative"> */}
        <Collections data={edges} />
      {/* </Box> */}
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "novias" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "dd/mm/yyyy")
            client
            model
            camera
            artDirector
            stylist
            gallery
          }
        }
      }
    }
  }
`
