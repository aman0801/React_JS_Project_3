import { Box, Container } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '..';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`)
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        alert(error)
        setLoading(false);
      }
    };
    fetchCoin();
  }, []);

  return  <Container maxW={"container.xl"}>
    {
      loading?(<Loader />):(<> 
      <Box width={"full"} borderWidth={1}>
        ohk
      </Box>
      </>)
    }
  </Container>;
};

export default CoinDetails