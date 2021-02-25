import React from 'react';
import Logo from '../assets/LogoNuevo.svg'
import {Box, Icon} from '@chakra-ui/react'
// import Image from '../assets/LogoVerospiNuevo.svg'

const biografia = () => {
  return (
    <Box h="500px" w="600px" border="1px solid black" >
      <Icon as={Logo} h="100px" w="100px" />
 
    </Box>
  );
};

export default biografia;