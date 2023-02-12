import { Box, Container, HStack, Radio, RadioGroup, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '../index';
import Loader from './Loader';
import { useParams } from "react-router-dom"

const CoinDetails = () => {

  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        setCoin(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        setError(true);
        alert(error)
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id]);

  if (error) return (<div>Something went wrong</div>)

  return <Container maxW={"container.xl"}>
    {
      loading ? (<Loader />) : (<>
        <Box width={"full"} borderWidth={1}>
          ohk
        </Box>
        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>

        <VStack spacing={"4"} p="16"></VStack>

      </>
      )}
  </Container>;
};

export default CoinDetails