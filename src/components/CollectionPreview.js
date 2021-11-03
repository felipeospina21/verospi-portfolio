import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Center, Link, Heading } from "@chakra-ui/react"
import CmsImage from "./CmsImage"

const CollectionPreview = ({ data }) => {
  const { frontmatter } = data
  const thumbnail =
    frontmatter.templateKey === "video"
      ? frontmatter.image
      : frontmatter.gallery[0]
  return (
    <Center>
      <Link as={GatsbyLink} to={data.fields.slug}>
        <Box
          // w={["330px", "400px", "500px", "600px"]}
          w="330px"
          h="400px"
          m="auto"
          overflow="hidden"
          position="relative"
        >
          <CmsImage src={thumbnail} alt={thumbnail} />
          <Box
            position="absolute"
            top="2rem"
            left={["5%"]}
            color="whitesmoke"
            bg="rgba(0,0,0,0.4)"
            // bg="brand.transparentMain"
            borderRadius="6px"
            m="auto"
          >
            <Heading as="h2" fontSize="1.5rem" textTransform="capitalize">
              {frontmatter.title}
            </Heading>
          </Box>
        </Box>
      </Link>
    </Center>
  )
}

export default CollectionPreview
