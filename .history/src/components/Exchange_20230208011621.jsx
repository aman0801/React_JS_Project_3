import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from "../index"
import { Container, Heading, HStack, VStack } from '@chakra-ui/react';
import Loader from "./Loader"
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const Exchange = () => {

  const[exchanges, setExchanges] = useState([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExchanges = async() => {
      try{
        const {data} = await axios.get(`${server}/api/exchanges`)
        setExchanges(data)
        setLoading(false)
    }catch(error){

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

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchange