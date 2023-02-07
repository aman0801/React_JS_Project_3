import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from "../index"
import { Container, HStack } from '@chakra-ui/react';
import Loader from "./Loader"

const Exchange = () => {

  const[exchanges, setExchanges] = useState([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExchanges = async() => {
      const { data } = await axios.get(`${server}/exchanges?per_page=250`);
      setExchanges(data);
      console.log(data);
      setLoading(false)
    }
    fetchExchanges();
  }, [])

  return <Container maxW={"container.xl"}>{loading?<Loader />:<>
  <HStack></HStack>
  </>}</Container>
};

export default Exchange