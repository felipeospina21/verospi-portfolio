import React from "react"
import CollectionPreview from "./CollectionPreview"
import { SimpleGrid } from "@chakra-ui/react"


const Collections = ({ data }) => {
  return (
    <SimpleGrid columns={[1, null, null, null, 2]} spacing={2} m="2rem auto">
      {data.map(collection => {
        const { node } = collection
        return <CollectionPreview key={node.id} data={node} />
      })}
    </SimpleGrid>
  )
}

export default Collections
