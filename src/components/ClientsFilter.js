import React, { useState } from "react"
import { Center, Heading } from "@chakra-ui/react"
import { nanoid } from 'nanoid'
import TagsFilter from "./TagsFilter"
import Collections from "./Collections"

const ClientsFilter = ({ data }) => {
  const allPosts = [...data.allMarkdownRemark.edges]
  allPosts.map(element => element.node.id = nanoid())

  const [filteredPosts, setFilteredPosts] = useState(allPosts)

  const filterPostsByClient = clientName => {
    const filterByCategory = allPosts.filter(post =>
      post.node.frontmatter.client
        ? post.node.frontmatter.client.includes(clientName)
        : null
    )
    setFilteredPosts(filterByCategory)
  }

  const filterAllPosts = () => {
    setFilteredPosts(allPosts)
  }

  return (
    <>
      <TagsFilter
        clients={data.clientsYaml.clientes}
        filterAllPosts={filterAllPosts}
        filterPostsByClient={filterPostsByClient}
      />
      {filteredPosts.length < 1 ? (
        <Center m="5rem auto">
          <Heading as="h3" size="md">
            No se encontraron proyectos
          </Heading>
        </Center>
      ) : (
        <Collections data={filteredPosts} />
      )}
    </>
  )
}

export default ClientsFilter
