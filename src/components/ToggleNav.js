import React from "react"
import NavLinks from "./NavLinks"
import { RiMenu3Fill } from "react-icons/ri"
import { useDisclosure, Icon, Box } from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

const ToggleNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement] = React.useState("right")

  return (
    <>
      <Box w="80%" display="flex" justifyContent="right" alignItems="center">
        <Icon
          as={RiMenu3Fill}
          boxSize="2rem"
          ml="auto"
          mr="0.5rem"
          cursor="pointer"
          onClick={onOpen}
        />
      </Box>

      <DrawerMenu placement={placement} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export const DrawerMenu = ({ placement, onClose, isOpen }) => {
  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Verospi</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <NavLinks onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default ToggleNav
