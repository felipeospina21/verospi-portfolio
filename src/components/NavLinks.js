import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Text } from "@chakra-ui/react"

const NavLinks = ({ onClose }) => {
  return (
    <>
      <NavLink url="/" text="Inicio" onClose={onClose} />
      <NavLink url="/biografia" text="Biografía" onClose={onClose} />
      <NavLink url="/novias" text="Novias" onClose={onClose} />
      <NavLink url="/moda" text="Moda" onClose={onClose} />
      <NavLink url="/comercial" text="Comercial" onClose={onClose} />
      <NavLink url="/video" text="Video" onClose={onClose} />
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
      <Text fontSize="3xl" m="2rem auto" fontFamily="primary">
        {text}
      </Text>
    </Link>
  )
}

export default NavLinks
