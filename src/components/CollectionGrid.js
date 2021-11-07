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
      {frontmatter.gallery.map((pict, idx) => {
        return (
          <div key={`${pict}-${idx}`}>
            {frontmatter.templateKey === "video" ? (
              <GridItem colSpan={4} h="500px">
                <Video videoSrcURL={pict} videoTitle={frontmatter.title} />
              </GridItem>
            ) : (
              <GridItem m="auto" w="400px">
                <CmsImage src={pict} alt={`${pict}-${idx}`} />
              </GridItem>
            )}
          </div>
        )
      })}
    </Grid>
  )
}

export default CollectionGrid
