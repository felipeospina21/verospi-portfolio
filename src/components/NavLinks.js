import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import { BsChevronDown } from "react-icons/bs"
import {
  Box,
  Icon,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"

const NavLinks = ({ onClose }) => {
  return (
    <>
      <NavLink url="/" text="Inicio" onClose={onClose} />
      <NavLink url="/biografia" text="Biografía" onClose={onClose} />
      <PortfolioMenu onClose={onClose} />
      <NavLink url="/contacto" text="Contacto" onClose={onClose} />
    </>
  )
}

export const NavLink = ({ url, text, onClose }) => {
  return (
    <Link
      as={GatsbyLink}
      to={url}
      onClick={onClose}
      color="black"
      m="0"
      _focus={{ bg: "none" }}
    >
      <Text fontSize="3xl" m="2rem auto" fontFamily="heading">
        {text}
      </Text>
    </Link>
  )
}

export const PortfolioMenu = ({ onClose }) => {
  const [linksData] = useState([
    { url: "/novias", text: "Novias" },
    { url: "/moda", text: "Moda" },
    { url: "/comercial", text: "Comercial" },
    { url: "/video", text: "Video" },
  ])
  return (
    <Menu>
      <MenuButton fontSize="3xl" m="0" fontFamily="heading">
        <Box>
          Portafolio
          <Icon as={BsChevronDown} ml="0.5rem" boxSize="0.7em" />
        </Box>
      </MenuButton>
      <MenuList>
        {linksData.map(link => {
          return (
            <MenuItem key={link.url} h="80px">
              <NavLink url={link.url} text={link.text} onClose={onClose} />
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
export default NavLinks
