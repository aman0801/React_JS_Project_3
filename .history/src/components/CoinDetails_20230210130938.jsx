import { Box, Container } from '@chakra-ui/react';
import React, { useState } from 'react'
import Loader from './Loader';

const CoinDetails = () => {

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

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