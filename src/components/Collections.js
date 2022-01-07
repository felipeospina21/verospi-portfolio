import React from "react"
import CollectionPreview from "./CollectionPreview"
import { SimpleGrid } from "@chakra-ui/react"
import { nanoid } from 'nanoid'


const Collections = ({ data }) => {
  return (
    <SimpleGrid columns={[1, null, null, 3]} spacing={2} m="2rem auto">
      {data.map(collection => {
        const { node } = collection
        node.uniqueId = nanoid()
        return <CollectionPreview key={node.uniqueId} data={node} />
      })}
    </SimpleGrid>
  )
}

export default Collections
