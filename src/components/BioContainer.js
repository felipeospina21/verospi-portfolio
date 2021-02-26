import React from "react"
import Image from "./Image500"
import { Box, Text, SimpleGrid } from "@chakra-ui/react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const BioContainer = () => {
  const breakpoints = useBreakpoint()
  return (
    <>
      <BioContent />
    </>
  )
}

export const BioContent = () => (
  <SimpleGrid columns={[1, null, 2]} spacing={4} mb="2rem">
    <Box maxH="700px" overflow="hidden">
      <Image src="verospi-bio2.jpg" alt="Foto Veronica Ospina" />
    </Box>
    <Box mt="1rem">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis
        libero amet eos quae quisquam sint consequatur? Beatae aliquam
        doloremque nulla quod at laudantium, esse rerum, rem magni, nemo
        debitis.
      </Text>
    </Box>
  </SimpleGrid>
)

export default BioContainer
