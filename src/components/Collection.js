import React from "react"
import { Box, Heading, Center } from "@chakra-ui/react"
import Credits from "./Credits"
import CollectionGrid from "./CollectionGrid"

const Collection = ({ data }) => {
  const { frontmatter } = data
  return (
    <Box>
      <Center my={["1rem", "2rem"]} flexDir="column">
        <Heading as="h1" size="xl">
          {frontmatter.title}
        </Heading>
        <Credits frontmatter={frontmatter} />
      </Center>
      <CollectionGrid frontmatter={frontmatter} />
    </Box>
  )
}

export default Collection
