import React from "react"
import { Box, Center, Heading, Button } from "@chakra-ui/react"

const TagsFilter = ({ clients, filterPostsByClient, filterAllPosts }) => {
  return (
    <Center flexDir="column" m="0.5rem auto">
      <Box
        borderTop="1px solid rgba(119, 117, 117, 0.4)"
        w="60%"
        m="1rem auto"
      ></Box>
      <Heading as="h4" size="sm">
        Clientes
      </Heading>
      <Center flexWrap="wrap">
        <TagBtn onClick={() => filterAllPosts()}>All</TagBtn>
        {clients.map(client => {
          return (
            <TagBtn
              key={client.name}
              onClick={() => filterPostsByClient(client.name)}
            >
              {client.name}
            </TagBtn>
          )
        })}
      </Center>
    </Center>
  )
}

export default TagsFilter

export const TagBtn = props => (
  <Button
    size="xs"
    margin="0.5em 0.2em"
    padding="0.4em 0.7em"
    bgColor="transparent"
    border="1px solid #1d1d1d"
    borderRadius="5px"
    onClick={props.onClick}
  >
    {props.children}
  </Button>
)
