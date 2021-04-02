import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const prueba = ({ data }) => {
  const images = data.allFile.edges

  return (
    <div>
      <p>test</p>
      {
        images.map(image=>{
          return <GatsbyImage key={image.node.relativePath}image={getImage(image.node)} alt="pic" />
        })
      }
      
    </div>
  )
}

export default prueba

export const pageQuery = graphql`
  query querypage {
    allFile(
      filter: {
        absolutePath: { regex: "/image/" }
        relativePath: { regex: "/hero/" }
      }
    ) {
      edges {
        node {
          relativePath
          id
          childImageSharp {
            gatsbyImageData(
              width: 1800
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
