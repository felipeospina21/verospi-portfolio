import React from "react"
import { graphql } from "gatsby"
import Collection from "../components/Collection"
import { Heading, Center } from "@chakra-ui/react"

export default function comercialTemplate({ data }) {
  const { markdownRemark: frontmatter } = data

  return (
    <>
      <Center>
        <Heading as="h1" size="xl">
          Comercial
        </Heading>
      </Center>
      <Collection data={frontmatter} />
    </>
  )
}

export const pageQuery = graphql`
  query comercialCollection($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
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
`
