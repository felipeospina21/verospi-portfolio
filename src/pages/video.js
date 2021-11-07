import React from "react"
import { graphql } from "gatsby"
import Collections from "../components/Collections"
import SEO from "../components/seo"
import { Heading, Center } from "@chakra-ui/react"

export default function videoPage({ data }) {
  const { allMarkdownRemark: edges } = data

  return (
    <>
      <SEO title="Video" />
      <Center>
        <Heading as="h1" size="xl">
          Video
        </Heading>
      </Center>
      <Collections data={edges} />
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "video" } } }
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
            hair
            gallery
            image
            templateKey
          }
        }
      }
    }
  }
`
