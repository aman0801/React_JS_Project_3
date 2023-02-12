import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    <Image w={"full"} h={"full"} objectFit={"contain"} src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fphotos%2FI0TDRP0fj6Y&psig=AOvVaw1G6feh8hXc2MLApCeY_ITv&ust=1676314398331000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDV-PTTkP0CFQAAAAAdAAAAABAE"} />
    <Text
    fontSize={"6xl"}
    fontWeight={"thin"}
    color={"whiteAlpha.700"}
    textAlign={"center"}
    mt={"20"}
    ></Text>
  </Box>;
}

export default Home