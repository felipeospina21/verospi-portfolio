import React from "react"
import { Icon, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import Logo from "../assets/LogoNuevo.svg"

const HeaderLogo = () => {
  // TODO: Revisar que el logo no se renderiza en safari.
  return (
    <Link as={GatsbyLink} to="/" _focus={{ bg: "none" }}>
      <Icon as={Logo} w="120px" h="70px" mt="0.5rem" ml="0.5rem" />
    </Link>
  )
}

export default HeaderLogo
