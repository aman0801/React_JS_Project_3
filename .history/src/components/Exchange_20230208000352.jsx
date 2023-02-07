import React, { useEffect } from 'react'
import axios from 'axios'
import { server } from '../index'

const Exchange = () => {

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/api/exchanges`)
      console.log(data)
    }
    
  }, [])

  return <div>Exchange</div>
};

export default Exchange