import React from "react"
import { Box } from "@chakra-ui/react"
import CmsImage from "./CmsImage"

const Collection = ({ data }) => {
  const { frontmatter } = data
  const thumbnail = frontmatter.gallery[0]
  return (
    <Box border="1px solid black">
      <p>{frontmatter.title}</p>
      <p>{frontmatter.model}</p>
      <p>{frontmatter.camera}</p>
      <p>{frontmatter.client}</p>
      {frontmatter.gallery.map(pict => {
        return <CmsImage key={pict} src={pict} alt={pict} />
      })}
    </Box>
  )
}

export default Collection
