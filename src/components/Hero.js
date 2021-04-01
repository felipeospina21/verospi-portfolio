import React from "react"
import Image from "./Image"
import { Box, Heading, Center } from "@chakra-ui/react"

const Hero = ({ text, src, alt, height }) => {
  return (
    <Box
      // w="100%"
      // h={height}
      maxH={height}
      overflow="hidden"
      position="relative"
    >
      <Image src={src} alt={alt} />

      <Center
        position="absolute"
        top={["70px", "100px", "150px", "170px"]}
        zIndex="25"
        m={["auto 0", null, "auto 10%"]}
        w={["100%", null, "80%"]}
      >
        <Heading
          as="h1"
          color="white"
          fontSize={["30px", "50px", "70px", "90px", "120px"]}
        >
          {text}
        </Heading>
      </Center>
    </Box>
  )
}

export default Hero
