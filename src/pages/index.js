import React from "react"
// import { Box } from "@chakra-ui/react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SEO from "../components/seo"
import Categories from "../components/Categories"
import Hero from "../components/Hero"

const IndexPage = () => {
  const breakpoints = useBreakpoint()
  const heightList = ["80vh", "90vh", null, "500px"]
  return (
    <>
      <SEO title="Home" />
      {breakpoints.md ? (
        <Hero
          text="Veronica Ospina"
          src="1.jpg"
          alt="Imagen de modelo femenina"
          height={heightList}
          // height={["500px", "600px", "800px"]}
        />
      ) : (
        <Hero
          text=""
          src="hero.jpg"
          alt="Imagen de modelo femenina"
          height={heightList}
        />
      )}
      <Categories />
    </>
  )
}

export default IndexPage
