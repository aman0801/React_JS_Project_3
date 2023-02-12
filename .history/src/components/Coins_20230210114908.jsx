import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from "../index"
import { Container, Heading, HStack, VStack } from '@chakra-ui/react';
import Loader from "./Loader"
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'; 
import CoinCard from './CoinCard';

const Coins = () => {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr")

  const currencySymbol = currency==="inr"?"Rs ":currency==="eur"?"€ ":"$ ";

  const changepage = (page) => {
    setPage(page);
    setLoading(true);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data); 
        setLoading(false);
      } catch (error) {
        setError(true);
        alert(error)
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if(error) return (<div>Something went wrong</div>)

  return <Container maxW={"container.xl"}>{loading ? <Loader /> : <>
    <HStack wrap={'wrap'}>
      {coins.map((i) => (
        <CoinCard
          id={i.id}
          key={i.id}
          name={i.name}
          price={i.current_price}
          img={i.image}
          symbol={i.trust_score_rank}
          url={i.url} 
          currencySymbol={currencySymbol}
          />
      ))}
    </HStack>
    <HStack bgColor={"blackAlpha.900"} color={}></HStack>
  </>}</Container>
};

export default Coins