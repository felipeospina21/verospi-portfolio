import React from "react"
import CollectionPreview from "./CollectionPreview"
import { SimpleGrid } from "@chakra-ui/react"

const Collections = ({ data }) => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={2} m="2rem auto">
      {data.edges.map(collection => {
        const { node } = collection
        return <CollectionPreview key={node.frontmatter.title} data={node} />
      })}
    </SimpleGrid>
  )
}

export default Collections
