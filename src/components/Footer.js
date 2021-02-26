import React from "react"
import ContactInfo from "./ContactInfo"
import Social from "./Social"
import { Grid, Box, Center } from "@chakra-ui/react"

const Footer = () => {
  return (
    <>
      <Box
        as="footer"
        background="brand.main"
        fontSize={["xs","sm"]}
        p={["0.5rem", "1rem"]}
        mt="1rem"
      >
        <Box maxW="500px" m="auto">
          <Grid templateColumns="1fr 0.5fr" gap={1}>
            <Social />
          </Grid>
          <ContactInfo />
        </Box>
      </Box>
      <Center fontSize="xs" m="0.5rem auto">
        Creado por Felipe Ospina
      </Center>
    </>
  )
}

export default Footer
