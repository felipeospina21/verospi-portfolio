import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Link, SimpleGrid, Heading, Center } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

const Categories = () => {
  const [categoriesList] = useState([
    {
      name: "novias",
      img: (
        <StaticImage
          src="../images/novias-preview.jpg"
          alt="Imagen de una novia"
        />
      ),
    },
    {
      name: "moda",
      img: (
        <StaticImage
          src="../images/moda-preview.jpg"
          alt="Imagen de una modelo"
        />
      ),
    },
    {
      name: "comercial",
      img: (
        <StaticImage
          src="../images/comercial-preview.jpg"
          alt="Imagen de una modelo"
        />
      ),
    },
    {
      name: "video",
      img: (
        <StaticImage
          src="../images/video-preview.jpg"
          alt="Imagen de una modelo"
        />
      ),
    },
  ])
  return (
    <>
      <Center>
        <Heading as="h1" size="2xl" m="1.5rem auto">
          Portafolio
        </Heading>
      </Center>
      <SimpleGrid columns={[1, null, 2, null, 4]} spacing={5}>
        {categoriesList.map(category => {
          return (
            <Box
              key={category.name}
              w="320px"
              border="1px solid black"
              overflow="hidden"
              position="relative"
              m="auto"
            >
              <Link as={GatsbyLink} to={`/${category.name}`}>
                <Box w="100%" h="100%" maxH="450px">
                  <Box
                    bgColor="#333"
                    w="100%"
                    h="100%"
                    position="absolute"
                    top="0"
                    zIndex="20"
                    opacity="0.4"
                  />
                  {category.img}
                  <Box
                    position="absolute"
                    // h="40px"
                    top="40%"
                    left="25%"
                    color="white"
                    bg="rgba(0,0,0,0.1)"
                    borderRadius="6px"
                  >
                    <Heading as="h2" size="2xl" textTransform="capitalize">
                      {category.name}
                    </Heading>
                  </Box>
                </Box>
              </Link>
            </Box>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default Categories
