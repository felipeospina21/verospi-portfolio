import React from "react"
import { Box } from "@chakra-ui/react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <Box w="100%" h="100%">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="100%"
      height="100%"
    />
  </Box>
)
export default Video
