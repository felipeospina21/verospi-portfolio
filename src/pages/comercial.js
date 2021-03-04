import React from "react"
import { graphql } from "gatsby"
import Collections from "../components/Collections"
import SEO from "../components/seo"
import { Heading, Center } from "@chakra-ui/react"

export default function comercialPage({ data }) {
  const { allMarkdownRemark: edges } = data

  return (
    <>
      <SEO title="Comercial" />
      <Center>
        <Heading as="h1" size="xl">
          Comercial
        </Heading>
      </Center>
      <Collections data={edges} />
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "comercial" } } }
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
            templateKey
          }
        }
      }
    }
  }
`
