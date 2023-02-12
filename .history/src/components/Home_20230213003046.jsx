import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer';

const Home = () => {
  return <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    <Image w={"full"} 
    h={"full"} 
    objectFit={"contain"} 
    filter={"grayscale(1)"} 
    src={"https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"} />
    <Text
    fontSize={"6xl"}
    fontWeight={"thin"}
    color={"whiteAlpha.700"}
    textAlign={"center"}
    mt={"-1 0"}
    >Crypto Exchange</Text>
    <Footer />
  </Box>;
}

export default Home