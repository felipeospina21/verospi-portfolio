import React from "react"
import { Box } from "@chakra-ui/react"

const CollectionPreview = ({ frontmatter }) => {
  return (
    <Box w="320px" h="320px" border="1px solid black">
      <p>{frontmatter.model}</p>
      <p>{frontmatter.camera}</p>
      <p>{frontmatter.client}</p>
    </Box>
  )
}

export default CollectionPreview
