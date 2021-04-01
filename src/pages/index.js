import React from "react"
// import { Box } from "@chakra-ui/react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SEO from "../components/seo"
import Categories from "../components/Categories"
import ImgCarousel from "../components/ImgCarousel"

const IndexPage = () => {
  const breakpoints = useBreakpoint()
  const desktopArray = [{ src: "hero-desktop.jpg", alt: "foto" }]
  const mobileArray = [{ src: "hero-mobile2.jpg", alt: "foto" }]
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
