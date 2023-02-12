import { Container } from '@chakra-ui/react';
import React, { useState } from 'react'

const CoinDetails = () => {

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  return  <Container maxW={"container.xl"}></Container>;
};

export default CoinDetails