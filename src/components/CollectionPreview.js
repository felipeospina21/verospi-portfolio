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
          <Center
            position="absolute"
            top="0.5rem"
            left={["50%"]}
            transform="translateX(-50%)"
            color="whitesmoke"
            bg="#ffffff10"
            sx={{ backdropFilter: "blur(12px)" }}
            borderRadius="6px"
            m="auto"
            padding="0.7em 2em"
            width="80%"
          >
            <Heading
              as="h2"
              fontSize="1.4rem"
              textTransform="capitalize"
              margin="0 auto"
            >
              {frontmatter.title}
            </Heading>
          </Center>
        </Box>
      </Link>
    </Center>
  )
}

export default CollectionPreview
