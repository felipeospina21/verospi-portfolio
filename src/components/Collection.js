import React from "react"
import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react"
import CmsImage from "./CmsImage"

const Collection = ({ data }) => {
  const { frontmatter } = data
  const thumbnail = frontmatter.gallery[0]
  return (
    <Box border="1px solid black">
      <Heading as="h1" size="xl">
        {frontmatter.title}
      </Heading>
      <Text>{frontmatter.model}</Text>
      <Text>{frontmatter.camera}</Text>
      <Text>{frontmatter.client}</Text>
      <SimpleGrid columns={[1, null, 2, 3, null, 4]} spacing={5}>
        {frontmatter.gallery.map(pict => {
          return (
            <Box key={pict}>
              <CmsImage src={pict} alt={pict} />
            </Box>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default Collection
