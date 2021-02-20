import React from "react"
import { graphql } from "gatsby"
import CmsImage from "../components/CmsImage"

export default function modaTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <div>
      <p>{frontmatter.model}</p>
      <p>{frontmatter.camera}</p>
      <p>{frontmatter.client}</p>
      {frontmatter.modaGallery.map(img => {
        return <CmsImage key={img} src={img} alt={img} />
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "moda" } }) {
      frontmatter {
        artDirector
        camera
        client
        fotoNovias
        modaGallery
        model
        s
      }
    }
  }
`
