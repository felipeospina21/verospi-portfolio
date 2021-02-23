import React from "react"
import { graphql } from "gatsby"
import CollectionVideo from "../components/CollectionVideo"

export default function videoTemplate({ data }) {
  const { markdownRemark: frontmatter } = data

  return <CollectionVideo data={frontmatter} />
}

export const pageQuery = graphql`
  query videoCollection($title: String!) {
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
