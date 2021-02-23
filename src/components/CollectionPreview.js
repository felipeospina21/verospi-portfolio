import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Center, Link, Heading } from "@chakra-ui/react"
import CmsImage from "./CmsImage"
import Image600 from "./Image600"


const CollectionPreview = ({ data }) => {
  const { frontmatter } = data
  const thumbnail = frontmatter.gallery[0]
  return (
    <Center position="relative">
      <Link as={GatsbyLink} to={data.fields.slug}>
        <Box w="600px" h="400px" border="1px solid black" overflow="hidden">
          <CmsImage src={thumbnail} alt={thumbnail} />
          <Box
            position="absolute"
            top="20%"
            left="20%"
            color="white"
            bg="rgba(0,0,0,0.1)"
            borderRadius="6px"
          >
            <Heading as="h2" size="xl" textTransform="capitalize">
              {frontmatter.title}
            </Heading>
          </Box>
        </Box>
      </Link>
    </Center>
  )
}

export default CollectionPreview
