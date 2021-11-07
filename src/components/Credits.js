import React from "react"
import { Table, Tbody, Tr, Td } from "@chakra-ui/react"

const Credits = ({ frontmatter }) => {
  let modelArr = []
  if (frontmatter.model) {
    modelArr = frontmatter.model.split(",")
  }

  return (
    <Table my="2rem" variant="simple" size="sm" maxW="350px">
      <Tbody>
        {frontmatter.client ? (
          <Tr>
            <TdBold>
              {frontmatter.templateKey === "editorial"
                ? "Editorial: "
                : "Cliente: "}
              :
            </TdBold>
            <Td>{frontmatter.client}</Td>
          </Tr>
        ) : null}

        {frontmatter.camera ? (
          <Tr>
            <TdBold>
              {frontmatter.templateKey === "video" ? "Video: " : "Fotografía: "}
            </TdBold>
            <Td>{frontmatter.camera}</Td>
          </Tr>
        ) : null}

        {frontmatter.model ? (
          <Tr>
            <TdBold>{modelArr.length > 1 ? "Model@s" : "Model@"}</TdBold>
            <Td>{frontmatter.model}</Td>
          </Tr>
        ) : null}

        {frontmatter.hair ? (
          <Tr>
            <TdBold>Peinado:</TdBold>
            <Td>{frontmatter.hair}</Td>
          </Tr>
        ) : null}

        {frontmatter.stylist ? (
          <Tr>
            <TdBold>Estilismo:</TdBold>
            <Td>{frontmatter.stylist}</Td>
          </Tr>
        ) : null}

        {frontmatter.artDirector ? (
          <Tr>
            <TdBold>Dirección de arte:</TdBold>
            <Td>{frontmatter.artDirector}</Td>
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
