import React from "react"
import { graphql } from "gatsby"
import CmsImage from "../components/CmsImage"

export default function noviasTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <div>
      <p>{frontmatter.model}</p>
      <p>{frontmatter.camera}</p>
      <p>{frontmatter.client}</p>
      <CmsImage src={frontmatter.fotoNovias} alt="pic" />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "novias" } }) {
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
