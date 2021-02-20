import React from "react"
import CollectionPreview from "./CollectionPreview"

const Collections = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.edges.map(collection => {
        const { node } = collection
        return (
          <CollectionPreview
            key={node.frontmatter.title}
            data={node}
          />
        )
      })}
    </>
  )
}

export default Collections
