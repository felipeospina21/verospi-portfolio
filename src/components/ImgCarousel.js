import React from "react"
import { Box } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImgCarousel = ({ array }) => {
  return (
    <Box w="100%" maxW="1800px" margin="2rem 0">
      <Carousel
        autoPlay="true"
        // autoFocus="true"
        centerMode={false}
        infiniteLoop="true"
        // centerSlidePercentage={95}
        interval={3000}
      >
        {array.map(slide => {
          const { src, alt } = slide
          return (
            <Box h={["350px", "400px", "500px", "700px"]} w="100%">
              <GatsbyImage
                key={slide.node.relativePath}
                image={getImage(slide.node)}
                alt="pic"
              />
            </Box>
          )
        })}
      </Carousel>
    </Box>
  )
}

export default ImgCarousel
