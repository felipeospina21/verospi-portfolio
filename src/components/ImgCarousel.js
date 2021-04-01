import React from "react"
import { Box } from "@chakra-ui/react"
import Slide from "./Slide"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

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
          return <Slide src={src} alt={alt} />
        })}
      </Carousel>
    </Box>
  )
}

export default ImgCarousel
