import React, { useState, useEffect } from 'react'
import Spinner from "../components/ui/Spinner";
import { baseUrl } from '../constants/api';
import axios from 'axios';
import Coinscomponent from '../components/coins/Coins.component'


export default function Homepages() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true);
    axios(baseUrl)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        setError("An error ecured.")
      });

  }, [])
  return (
    <div className='container'>
      <div className="row">

        <div className="col-12 text-center">

          <h1>Crypto Tracking</h1>
          {/* <Spinner /> */}
          <h4>Aplace of...</h4>
          <h4>Don't forget Me...</h4>
        </div>

      </div>

      <div className="row">

        <div className="col-12">
          {loading ? < Spinner /> : error !== "" ? <h1>{error}</h1> : <Coinscomponent data={data} />}
        </div>
      </div>

    </div>

  )
}
