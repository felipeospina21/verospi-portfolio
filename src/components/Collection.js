import React from 'react';
import {Box} from '@chakra-ui/react'
import CmsImage from "./CmsImage"

const Collection = ({frontmatter}) => {
  return (
    <Box w="320px" h="320px" border="1px solid black">
      <p>{frontmatter.model}</p>
      <p>{frontmatter.camera}</p>
      <p>{frontmatter.client}</p>
      {frontmatter.modaGallery.map(img => {
        return <CmsImage key={img} src={img} alt={img} />
      })}
    </Box>
  );
};

export default Collection;