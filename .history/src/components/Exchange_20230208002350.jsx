import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from "../index"

const Exchange = () => {

  const[exchanges, setExchanges] = useState()

  useEffect(() => {
    const fetchExchanges = async() => {
      const { data } = await axios.get(`${server}/exchanges`);
      console.log(data);
    }
    fetchExchanges();
  }, [])

  return <div>Exchange</div>;
};

export default Exchange