import React from "react"
import { Box } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImgCarousel = ({ array }) => {
  return (
    <Box w="100%" maxW="1800px" margin="-2rem auto">
      <Carousel
        autoPlay="true"
        centerMode={false}
        infiniteLoop="true"
        showThumbs="false"
        // centerSlidePercentage={95}
        interval={3000}
      >
        {array.map(slide => {
          return (
            <GatsbyImage
              key={slide.node.relativePath}
              image={getImage(slide.node)}
              alt="Imagen de modelos y maquillaje"
            />
          )
        })}
      </Carousel>
    </Box>
  )
}

export default ImgCarousel
