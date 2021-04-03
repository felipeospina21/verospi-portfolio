import React from "react"
import { Text, Center, Icon } from "@chakra-ui/react"
import { GrLocation, GrMailOption } from "react-icons/gr"

const ContactInfo = ({ dir, fontSize, margin }) => {
  return (
    <Center flexDir={dir} h="100%" mt="1rem">
      <Text mx="1rem" my={margin} fontSize={fontSize}>
        {" "}
        <Icon as={GrMailOption} /> verospimakeup@gmail.com
      </Text>
      <Text mx="1rem" my={margin} fontSize={fontSize}>
        {" "}
        <Icon as={GrLocation} />
        Medellin, Colombia
      </Text>
    </Center>
  )
}

export default ContactInfo
