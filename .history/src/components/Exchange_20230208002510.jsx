import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from "../index"
import { Container } from '@chakra-ui/react';

const Exchange = () => {

  const[exchanges, setExchanges] = useState([])

  useEffect(() => {
    const fetchExchanges = async() => {
      const { data } = await axios.get(`${server}/exchanges`);
      // console.log(data);
      setExchanges(data);
    }
    fetchExchanges();
  }, [])

  return <Container></Container>
};

export default Exchange