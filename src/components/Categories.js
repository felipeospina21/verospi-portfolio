import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Link } from "@chakra-ui/react"

const Categories = () => {
  const [categoriesList] = useState(["novias", "moda", "comercial", "video"])
  return (
    <Box>
      {categoriesList.map(category => {
        return (
          <Link as={GatsbyLink} to={`/${category}`} key={category}>
            <Box w="320px" h="320px" border="1px solid black">
              {category}
            </Box>
          </Link>
        )
      })}
    </Box>
  )
}

export default Categories
