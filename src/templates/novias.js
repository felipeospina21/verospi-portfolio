import React from "react"
import { graphql } from "gatsby"
import CollectionPreview from "../components/CollectionPreview"

export default function noviasTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return <CollectionPreview frontmatter={frontmatter} />
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "novias" } }) {
      frontmatter {
        artDirector
        camera
        client
        gallery
        model
        stylist
      }
    }
  }
`
