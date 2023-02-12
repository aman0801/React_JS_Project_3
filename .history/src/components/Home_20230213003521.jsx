import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer';

const Home = () => {
  return <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    <Image w={"full"} 
    h={"full"} 
    objectFit={"contain"} 
    filter={"grayscale(1)"} 
    
    <Text
    fontSize={"6xl"}
    fontWeight={"thin"}
    color={"whiteAlpha.700"}
    textAlign={"center"}
    mt={"-10"}
    >Crypto Exchange</Text>
    <Footer />
  </Box>;
}

export default Home