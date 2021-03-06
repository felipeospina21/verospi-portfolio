import React from "react"
import { Grid, GridItem } from "@chakra-ui/react"
import CmsImage from "./CmsImage"
import Video from "./Video"

const CollectionGrid = ({ frontmatter }) => {
  return (
    <Grid
      templateColumns={["1fr", null, null, null, "repeat(3,1fr)"]}
      gap={4}
      justifyContent="center"
    >
      {frontmatter.gallery.map(pict => {
        return (
          <>
            {frontmatter.templateKey === "video" ? (
              <GridItem key={pict} colSpan={4} h="500px">
                <Video videoSrcURL={pict} videoTitle={frontmatter.title} />
              </GridItem>
            ) : (
              <GridItem key={pict} m="auto" w="400px">
                <CmsImage src={pict} alt={pict} />
              </GridItem>
            )}
          </>
        )
      })}
    </Grid>
  )
}

export default CollectionGrid
