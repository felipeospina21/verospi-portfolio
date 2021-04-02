import React from "react"
// import { Box } from "@chakra-ui/react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Categories from "../components/Categories"
import ImgCarousel from "../components/ImgCarousel"

const IndexPage = ({ data }) => {
  const breakpoints = useBreakpoint()
  const desktopArray = data.desktop.edges
  const mobileArray = data.mobile.edges
  // const heightList = ["900px"]
  // #5A5551
  // Raleway
  return (
    <>
      <SEO title="Home" />
      {breakpoints.sm ? (
        <ImgCarousel array={mobileArray} />
      ) : (
        <ImgCarousel array={desktopArray} />
      )}
      <Categories />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    mobile: allFile(
      filter: {
        absolutePath: { regex: "/image/" }
        relativePath: { regex: "/mobile/" }
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
    desktop: allFile(
      filter: {
        absolutePath: { regex: "/image/" }
        relativePath: { regex: "/desktop/" }
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
