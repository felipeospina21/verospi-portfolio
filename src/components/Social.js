import React from "react"
import { Center, Icon, Link, GridItem } from "@chakra-ui/react"
import { FaInstagram, FaFacebook, FaRegEnvelope } from "react-icons/fa"

const Social = () => {
  return (
    <GridItem mx="auto">
      <Center h="100%">
        <Link href="https://www.instagram.com/" isExternal>
          <Icon as={FaInstagram} boxSize="2rem" mx="1rem" />
        </Link>
        <Link href="https://www.facebook.com/" isExternal>
          <Icon as={FaFacebook} boxSize="2rem" mx="1rem" />
        </Link>
        <Link href="mailto:verospimakeup@gmail.com" isExternal>
          <Icon as={FaRegEnvelope} boxSize="1.9rem" mx="1rem" />
        </Link>
      </Center>
    </GridItem>
  )
}

export default Social
