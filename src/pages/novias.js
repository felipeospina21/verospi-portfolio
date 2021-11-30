import React from "react"
import { graphql } from "gatsby"
import Collections from "../components/Collections"
// import Seo from "../components/Seo"

import { Heading, Center } from "@chakra-ui/react"

export default function noviasPage({ data }) {
  // const { allMarkdownRemark: edges } = data

  return (
    <>
      {/* <Seo title="Novias" /> */}
      <Center m="1rem auto" width="100%">
        <Heading as="h1" size="xl">
          Novias
        </Heading>
      </Center>
      <Collections data={data.allMarkdownRemark.edges} />
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
            camera
            hair
            gallery
            templateKey
          }
        }
      }
    }
  }
`
