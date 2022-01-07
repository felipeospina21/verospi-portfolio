import React, { useState, useEffect } from "react"
import ContactInfo from "./ContactInfo"
import Social from "./Social"
import { Box, Center, Link } from "@chakra-ui/react"

const Footer = () => {
  const [width, setWidth] = useState(0)
  const breakpoint = 720

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

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
          {width < breakpoint ? (
            <ContactInfo dir="column" margin="0.2rem" />
          ) : (
            <ContactInfo dir="row" />
          )}
        </Box>
      </Box>
      <Center fontSize="xs" m="0.5rem auto">
        Creado por{" "}
        <Box ml="0.3rem">
          <Link
            isExternal
            fontWeight={800}
            color="teal.500"
            href="https://www.linkedin.com/in/felipe-ospina-webdev/"
          >
            Felipe Ospina
          </Link>
        </Box>
      </Center>
    </>
  )
}

export default Footer
