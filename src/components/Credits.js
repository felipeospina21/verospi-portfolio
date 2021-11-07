import React from "react"
import { Table, Tbody, Tr, Td } from "@chakra-ui/react"

const Credits = ({ frontmatter }) => {
  return (
    <Table my="2rem" variant="simple" size="sm" maxW="350px">
      <Tbody>
        {frontmatter.client ? (
          <Tr>
            <TdBold>Cliente:</TdBold>
            <Td>{frontmatter.client}</Td>
          </Tr>
        ) : null}

        {frontmatter.camera ? (
          <Tr>
            <TdBold>
              {frontmatter.templateKey === "video"
                ? "Camarógrafo: "
                : "Fotógrafo: "}
            </TdBold>
            <Td>{frontmatter.camera}</Td>
          </Tr>
        ) : null}

        {frontmatter.model ? (
          <Tr>
            <TdBold>Modelo:</TdBold>
            <Td>{frontmatter.model}</Td>
          </Tr>
        ) : null}

        {frontmatter.artDirector ? (
          <Tr>
            <TdBold>Director de arte:</TdBold>
            <Td>{frontmatter.artDirector}</Td>
          </Tr>
        ) : null}
        {frontmatter.stylist ? (
          <Tr>
            <TdBold>Estilista:</TdBold>
            <Td>{frontmatter.stylist}</Td>
          </Tr>
        ) : null}
      </Tbody>
    </Table>
  )
}

export default Credits

export const TdBold = ({ children }) => {
  return <Td fontWeight="600">{children}</Td>
}
