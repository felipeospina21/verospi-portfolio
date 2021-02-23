import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box,Center, Link } from "@chakra-ui/react"
import CmsImage from "./CmsImage"

const CollectionPreview = ({ data }) => {
  const { frontmatter } = data
  const thumbnail = frontmatter.gallery[0]
  return (
    <Center >
      <Link as={GatsbyLink} to={data.fields.slug}>
        <Box w="600px" h="600px" border="1px solid black" overflow="hidden" >
          <p>{frontmatter.title}</p>
          <CmsImage src={thumbnail} alt={thumbnail} />
        </Box>
      </Link>
    </Center>
  )
}

export default CollectionPreview
