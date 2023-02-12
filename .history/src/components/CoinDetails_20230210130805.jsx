import { Box, Container } from '@chakra-ui/react';
import React, { useState } from 'react'
import Loader from './Loader';

const CoinDetails = () => {

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  return  <Container maxW={"container.xl"}>
    {
      loading?(<Loader />):(<> 
      <Box ></Box>
      </>)
    }
  </Container>;
};

export default CoinDetails