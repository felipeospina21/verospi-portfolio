import React from "react"
import { Link, Box } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeaderLogo = () => {
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
