import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from "../index"
import { Container } from '@chakra-ui/react';

const Exchange = () => {

  const[exchanges, setExchanges] = useState([])

  useEffect(() => {
    const fetchExchanges = async() => {
      const { data } = await axios.get(`${server}/exchanges?`);
      setExchanges(data);
      console.log(data);
    }
    fetchExchanges();
  }, [])

  return <Container maxW={"container.xl"}>df</Container>
};

export default Exchange