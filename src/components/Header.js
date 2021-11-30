import React, { useState, useEffect } from "react"
import { Box, Flex } from "@chakra-ui/react"
import HeaderLogo from "./HeaderLogo"
import ToggleNav from "./ToggleNav"
import FixedNav from "./FixedNav"

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1024

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

  return (
    <Box
      as="header"
      // background="white"
      h="5rem"
      w="100%"
      // position="absolute"
      // top="0"
      zIndex="30"
      overflow="hidden"
    >
      <Flex as="div" m="0 auto" h="100%" maxW="1800px">
        <HeaderLogo />
        {width < breakpoint ? <ToggleNav /> : <FixedNav />}
      </Flex>
    </Box>
  )
}

export default Header
