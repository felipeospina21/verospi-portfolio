import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import ContactInfo from "../components/ContactInfo"

const contactoPage = () => {
  return (
    <Box>
      <Center>
        <Heading as="h1" size="xl">
          Contacto
        </Heading>
      </Center>
      <ContactInfo />
    </Box>
  )
}

export default contactoPage
