import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import ContactInfo from "../components/ContactInfo"
// import Seo from "../components/Seo"

const contactoPage = () => {
  return (
    <>
      {/* <Seo title="Bigorafía" /> */}

      <Box>
        <Center my="3rem">
          <Heading as="h1" size="xl">
            Contacto
          </Heading>
        </Center>
        <Box mt="5rem" mb="20rem">
          <ContactInfo dir="column" fontSize="lg" margin="1rem" />
        </Box>
      </Box>
    </>
  )
}

export default contactoPage
