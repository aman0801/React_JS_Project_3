import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from "../index"
import { Container } from '@chakra-ui/react';

const Exchange = () => {

  const[exchanges, setExchanges] = useState([])
  const[loading, setLoading]

  useEffect(() => {
    const fetchExchanges = async() => {
      const { data } = await axios.get(`${server}/exchanges?per_page=250`);
      setExchanges(data);
      console.log(data);
    }
    fetchExchanges();
  }, [])

  return <Container maxW={"container.xl"}>df</Container>
};

export default Exchange