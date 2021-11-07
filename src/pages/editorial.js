import React from "react"
import { graphql } from "gatsby"
import Collections from "../components/Collections"
import SEO from "../components/seo"
import { Heading, Center } from "@chakra-ui/react"
import ClientsPreview from "../components/ClientsPreview"

export default function editorialPage({ data }) {
  const { allMarkdownRemark: edges } = data

  const nodes = edges.edges
  const clientsArr = []
  nodes.map(node => clientsArr.push(node.node.frontmatter.client))
  console.log(clientsArr)

  return (
    <>
      <SEO title="Editorial" />
      <Center>
        <Heading as="h1" size="xl">
          Editorial
        </Heading>
      </Center>
      {/* <ClientsPreview clients={clientsArr}/> */}
      <Collections data={edges} />
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
  }
`
