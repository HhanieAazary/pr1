import React from 'react'
import './coins.css';
import { Link } from 'react-router-dom';

export default function Coinscomponent({ data }) {
  //alert(data)
  return (
    
  

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">logo</th>
            <th scope="col">symbol</th>
            <th scope="col">Price</th>
            <th scope="col">24h %</th>
            <th scope="col">volume</th>
            <th scope="col">market_cap</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          
            {data.map((coin) => (
              <tr key = {coin.market_cap_rank}>
                <th scop = "row">{coin.market_cap_rank}</th>
                
                
                  <td><img src ={coin.image} alt= "logo" className='logo_symbol' /></td>

                  <td><Link to = {`/coinpages/${coin.id}`}>{coin.symbol}</Link></td>
                 
                  <td>{coin.current_price.toLocaleString()}</td>
                  <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                  <td>{coin.total_volume.toLocaleString()}$</td>
                  <td>{coin.market_cap.toLocaleString()}</td>
                  
                
              </tr>
            ))}
        </tbody>
      </table>
    
  );
};
