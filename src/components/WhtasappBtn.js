import React from "react"
import { Box, Icon, Link } from "@chakra-ui/react"
import WhatsappLogo from "../assets/whatsapp.svg"

const WhatsappBtn = () => {
  return (
    <Box
      position="sticky"
      top="90%"
      right="2%"
      zIndex="100"
      float="right"
      bg="none"
      border="none"
    >
      <Link
        href="http://api.whatsapp.com/send?phone=573146793183"
        rel="noreferrer"
        target="_blank"
        _focus={{ bg: "none" }}
      >
        <Icon as={WhatsappLogo} w="3rem" h="3rem" />
      </Link>
    </Box>
  )
}

export default WhatsappBtn
