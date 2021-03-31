import React from "react"
import {
  Box,
  SimpleGrid,
  Heading,
  Center,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react"
import CmsImage from "./CmsImage"
import Video from "./Video"

const Collection = ({ data }) => {
  const { frontmatter } = data
  return (
    <Box>
      <Center my={["1rem", "2rem"]} flexDir="column">
        <Heading as="h1" size="xl">
          {frontmatter.title}
        </Heading>

        <Table my="2rem" variant="simple" size="sm" maxW="350px">
          <Tbody>
            <Tr>
              <TdBold>Modelo:</TdBold>
              <Td>{frontmatter.model}</Td>
            </Tr>
            <Tr>
              <TdBold>
                {frontmatter.templateKey === "video"
                  ? "Camarógrafo: "
                  : "Fotógrafo: "}
              </TdBold>
              <Td>{frontmatter.camera}</Td>
            </Tr>
            <Tr>
              <TdBold>Cliente:</TdBold>
              <Td>{frontmatter.client}</Td>
            </Tr>
            {frontmatter.artDirector !== null ? (
              <Tr>
                <TdBold>Director de arte:</TdBold>
                <Td>{frontmatter.artDirector}</Td>
              </Tr>
            ) : null}
            {frontmatter.stylist !== null ? (
              <Tr>
                <TdBold>Estilista:</TdBold>
                <Td>{frontmatter.stylist}</Td>
              </Tr>
            ) : null}
          </Tbody>
        </Table>
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

export const TdBold = ({ children }) => {
  return <Td fontWeight="600">{children}</Td>
}
