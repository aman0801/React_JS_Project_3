import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from "../index"
import { Container, HStack, VStack } from '@chakra-ui/react';
import Loader from "./Loader"
import { Image } from '@chakra-ui/react';

const Exchange = () => {

  const[exchanges, setExchanges] = useState([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExchanges = async() => {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      console.log(data);
      setLoading(false)
    }
    fetchExchanges();
  }, [])

  return <Container maxW={"container.xl"}>{loading?<Loader />:<>
  <HStack wrap={'wrap'}>
    {exchanges.map((i)=>(
      <ExchangeCard 
      key={i.id}
      name={i.name} 
      rank={i.trust_score_rank} 
      url={i.url} />
    ))}
  </HStack>
  </>}</Container>
};

const ExchangeCard = ({name, image, rank, url}) => {
  <a href={url} target={'blank'}>
    <VStack
     ></VStack>
  </a>
}

export default Exchange