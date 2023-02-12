import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from "../index"
import { Button, Container, Heading, HStack, RadioGroup, VStack } from '@chakra-ui/react';
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

  const currencySymbol = currency === "inr" ? "Rs " : currency === "eur" ? "€ " : "$ ";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1)

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

  if (error) return (<div>Something went wrong</div>)

  return <Container maxW={"container.xl"}>{loading ? <Loader /> : <>
   
   <RadioGroup value={currency}></RadioGroup>
   
   
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
    <HStack w={"full"} overflowX={"auto"} p={"8"}>
      {
        btns.map((item, index)=>(
          <Button bgColor={"blackAlpha.900"}
        color={'white'}
        onClick={() => changePage(index+1)}
      >{index+1}</Button>
        ))
      }
    </HStack>
  </>}</Container>
};

export default Coins