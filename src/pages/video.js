import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { Heading, Center } from "@chakra-ui/react"
import ClientsFilter from "../components/ClientsFilter"

export default function videoPage({ data }) {
  return (
    <>
      <Seo title="Video" />
      <Center m="1rem auto" width="100%">
        <Heading as="h1" size="xl">
          Video
        </Heading>
      </Center>
      <ClientsFilter data={data} />
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
    clientsYaml {
      categories {
        name
      }
    }
  }
`
