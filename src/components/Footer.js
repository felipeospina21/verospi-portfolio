import React from "react"
import ContactInfo from "./ContactInfo"
import Social from "./Social"
import { Box, Center } from "@chakra-ui/react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Footer = () => {
  const breakpoints = useBreakpoint()
  return (
    <>
      <Box
        as="footer"
        background="brand.main"
        fontSize={["xs", "sm"]}
        p={["0.5rem", "1rem"]}
        mt="1rem"
      >
        <Box maxW="500px" m="auto">
          <Social />
          {breakpoints.sm ? (
            <ContactInfo dir="column" margin="0.2rem" />
          ) : (
            <ContactInfo dir="row" />
          )}
        </Box>
      </Box>
      <Center fontSize="xs" m="0.5rem auto">
        Creado por Felipe Ospina
      </Center>
    </>
  )
}

export default Footer
