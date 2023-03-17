import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { detailsUrl } from '../constants/api';
import axios from 'axios';
import Spinner from '../components/ui/Spinner';
import CoinDetailscomponent from '../components/coins/CoinDetails.component'

export default function Coinpages() {

    const paramObject = useParams();
    const url = detailsUrl(paramObject.id)

    const [coin, setCoin] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true);
        axios(url)
            .then((response) => {
                setLoading(false);
                console.log(response.data);
                setCoin(response.data);
            })
            .catch((error) => {
                setError("An error dddddddecureddd.")
            });

    }, [])
    return (
        <div className="container">

        <div className="col-12">
          {loading ? < Spinner /> : error !== "" ? <h1>{error}</h1> : <CoinDetailscomponent coin={coin} />}
        </div>
      </div>
    )
}
