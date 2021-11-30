import React from "react"
import { Center, Heading } from "@chakra-ui/react"
import BioContainer from "../components/BioContainer"
import Seo from "../components/Seo"

const biografiaPage = () => {
  return (
    <>
      <Seo title="Bigorafía" />
      <Center m="2rem">
        <Heading as="h1" size="xl">
          Biografía
        </Heading>
      </Center>
      <BioContainer />
    </>
  )
}

export default biografiaPage
