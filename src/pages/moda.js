import React from "react"
import { graphql } from "gatsby"
import Collections from "../components/Collections"

export default function modaPage({ data }) {
  const { allMarkdownRemark: edges } = data

  return <Collections data={edges} />
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "moda" } } }
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
