import { Badge, Box, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatNumber, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '../index';
import Loader from './Loader';
import { useParams } from "react-router-dom"
import Chart from "./Chart";
 
const CoinDetails = () => {

  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const 

  const currencySymbol = currency === "inr" ? "Rs " : currency === "eur" ? "€ " : "$ ";

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
          <Chart currency={currencySymbol} />
        </Box>
        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>

        <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
          <Text fontSize={"small"} alignSelf="center" opacity={"0.7"}>
            Last Updated on {Date(coin.market_data.last_updated).split("G")[0]}
          </Text>

          <Image src={coin.image.large}
            w={"16"}
            h={"16"}
            objectFit={"contain"}
          />
          <Stat>
            <StatNumber>
              {currencySymbol}
              {coin.market_data.current_price[currency]}
            </StatNumber>
            <StatHelpText>
              <StatArrow
                type={
                  coin.market_data.price_change_percentage_24h > 0 ?
                    "increase" : "decrease"
                }
              />
              {coin.market_data.price_change_percentage_24h}%
            </StatHelpText>
          </Stat>

          <Badge fontSize={"2xl"}
            bgColor={'blackAlpha.800'}
            color={"white"}>{`#${coin.market_cap_rank}`}</Badge>

          <CustomBar
            high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
            low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
          />

          <Box w={"full"} p="4">
            <Item title={"Max Supply"} value={coin.market_data.max_supply} />
            <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
            <Item title={"Market cap"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
            <Item title={"All time high"} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />
            <Item title={"All time high date"} value={Date(coin.market_data.ath_date[currency]).split("G")[0]} />
            <Item title={"All time low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
            <Item title={"All time low date"} value={Date(coin.market_data.atl_date[currency]).split("G")[0]} />


          </Box>

        </VStack>

      </>
      )}
  </Container>;
};

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack w={"full"} justifyContent={"space-between"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"sans-serif"} letterSpacing={"widest"}>{title}</Text>
    <Text>{value}</Text>
  </HStack>
);

export default CoinDetails