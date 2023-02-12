import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    <Image w={"full"} h={"full"} objectFit={"contain"} src={""} />
    <Text
    fontSize={"6xl"}
    fontWeight={"thin"}
    color={"whiteAlpha.700"}
    textAlign={"center"}
    
    ></Text>
  </Box>;
}

export default Home