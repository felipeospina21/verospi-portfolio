import React from "react"
import { Box, SimpleGrid, Heading, Text, Center } from "@chakra-ui/react"
import CmsImage from "./CmsImage"
import Video from "./Video"

const Collection = ({ data }) => {
  const { frontmatter } = data
  return (
    <Box>
      <Center my={["1rem", "1.5rem"]} flexDir="column">
        <Heading as="h1" size="xl">
          {frontmatter.title}
        </Heading>
        <Box my="1rem">
          <Text>Modelo: {frontmatter.model}</Text>
          <Text>
            {frontmatter.templateKey === "video"
              ? "Camarógrafo: "
              : "Fotógrafo: "}{" "}
            {frontmatter.camera}
          </Text>
          <Text>Cliente: {frontmatter.client}</Text>
          <Text>
            {frontmatter.artDirector !== null
              ? `Director de arte: ${frontmatter.artDirector}`
              : null}
          </Text>
          <Text>
            {frontmatter.stylist !== null
              ? `Estilista: ${frontmatter.stylist}`
              : null}
          </Text>
        </Box>
      </Center>

      <SimpleGrid columns={[1, null, 2, 3, null, 4]} spacing={5}>
        {frontmatter.gallery.map(pict => {
          return (
            <Box key={pict}>
              {frontmatter.templateKey === "video" ? (
                <Video videoSrcURL={pict} videoTitle={frontmatter.title} />
              ) : (
                <CmsImage src={pict} alt={pict} />
              )}
            </Box>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default Collection
