import React from "react"
import { Icon, Link, Box } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// import Logo from "../assets/LogoNuevo.svg"
import Logo from "../images/LogoVerospiNuevo.png"

const HeaderLogo = () => {
  // TODO: Revisar que el logo no se renderiza en safari.
  return (
    <Link as={GatsbyLink} to="/" _focus={{ bg: "none" }}>
      {/* <Icon as={Logo} w="120px" h="70px" mt="0.5rem" ml="0.5rem" /> */}
      <Box w="130px" m="0.5rem">
        <StaticImage
          src="../images/LogoVerospiNuevoC.png"
          alt="Logo Verospi"
          layout="fullWidth"
          // transformOptions={{fit:"cover"}}
          // width="90px"
          // height="70px"
        />
      </Box>
    </Link>
  )
}

export default HeaderLogo
