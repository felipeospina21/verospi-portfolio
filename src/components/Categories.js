import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Link, SimpleGrid } from "@chakra-ui/react"

const Categories = () => {
  const [categoriesList] = useState(["novias", "moda", "comercial", "video"])
  return (
    <SimpleGrid columns={[1, null, 2, 3, null, 4]}>
      {categoriesList.map(category => {
        return (
          <Box w="320px" h="320px" border="1px solid black">
            <Link as={GatsbyLink} to={`/${category}`} key={category}>
              <Box w="100%" h="100%">
                <Box>{category}</Box>
              </Box>
            </Link>
          </Box>
        )
      })}
    </SimpleGrid>
  )
}

export default Categories
