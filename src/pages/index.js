import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
// import Seo from "../components/Seo"
import Categories from "../components/Categories"
import ImgCarousel from "../components/ImgCarousel"

const IndexPage = ({ data }) => {
  const desktopArray = data.desktop.edges
  const mobileArray = data.mobile.edges
  const [width, setWidth] = useState(0)
  const breakpoint = 720

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

  return (
    <>
      {/* <Seo title="Home" /> */}
      {width < breakpoint ? (
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
              width: 800
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
