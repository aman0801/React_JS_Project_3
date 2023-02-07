import { background, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    background = {''}
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={'unstyled'} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
    </HStack>
  )
}

export default Header