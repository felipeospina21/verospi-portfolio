import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import Video from "./Video"

const Collection = ({ data }) => {
  const { frontmatter } = data
  const thumbnail = frontmatter.gallery[0]
  return (
    <Box>
      <Heading as="h1" size="xl">
        {frontmatter.title}
      </Heading>
      <Text>Modelo: {frontmatter.model}</Text>
      <Text>Camarógrafo: {frontmatter.camera}</Text>
      <Text>Cliente: {frontmatter.client}</Text>
      <Video videoSrcURL={thumbnail} videoTitle={frontmatter.title} />
    </Box>
  )
}

export default Collection
