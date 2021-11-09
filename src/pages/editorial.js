import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { Heading, Center } from "@chakra-ui/react"
import ClientsFilter from "../components/ClientsFilter"

export default function editorialPage({ data }) {
  return (
    <>
      <Seo title="Editorial" />
      <Center m="1rem auto" width="100%">
        <Heading as="h1" size="xl">
          Editorial
        </Heading>
      </Center>
      <ClientsFilter data={data} />
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "editorial" } } }
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
