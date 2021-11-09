import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const CmsImage = ({ src, ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { absolutePath: { regex: "/static/img/" } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () =>
      data.images.edges.find(({ node }) => src === "/img/" + node.relativePath),
    [data, src]
  )

  if (!match) return null

  const { node: { childImageSharp, publicURL, extension } = {} } = match

  if (extension === "svg" || !childImageSharp) {
    return <img src={publicURL} alt="brand logo" {...rest} />
  }

  return <Img fluid={childImageSharp.fluid} {...rest} />
}

CmsImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default CmsImage
