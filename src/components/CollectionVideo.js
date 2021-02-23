import React from "react"
import { Box } from "@chakra-ui/react"
import Video from "./Video"

const Collection = ({ data }) => {
  const { frontmatter } = data
  const thumbnail = frontmatter.gallery[0]
  return (
    <Box w="600px" h="600px" border="1px solid black">
      <p>{frontmatter.title}</p>
      <p>{frontmatter.model}</p>
      <p>{frontmatter.camera}</p>
      <p>{frontmatter.client}</p>
      <Video videoSrcURL={thumbnail} videoTitle={frontmatter.title} />
    </Box>
  )
}

export default Collection
