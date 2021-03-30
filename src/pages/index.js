import React from "react"
// import { Box } from "@chakra-ui/react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SEO from "../components/seo"
import Categories from "../components/Categories"
import Hero from "../components/Hero"

const IndexPage = () => {
  const breakpoints = useBreakpoint()
  const heightList = ["900px"]
  return (
    <>
      <SEO title="Home" />
      {breakpoints.sm ? (
        <Hero
          // text="Veronica Ospina"
          // src="1.jpg"
          src="hero-mobile.jpg"
          alt="Imagen de modelo femenina"
          height="1000px"
        />
      ) : (
        <Hero
          text=""
          // src="hero.jpg"
          src="hero-desktop.jpg"
          alt="Imagen de modelo femenina"
          height="1600px"
        />
      )}
      <Categories />
    </>
  )
}

export default IndexPage
