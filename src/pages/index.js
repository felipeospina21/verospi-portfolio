import React from "react"
import { Box } from "@chakra-ui/react"
import SEO from "../components/seo"
import Categories from "../components/Categories"
import Hero from "../components/Hero"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero height="100vh" text="Veronica Ospina" src="background.png" alt="Imagen de Verospi maquillando"/>
    <Categories />
  </>
)

export default IndexPage
