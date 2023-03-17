import React from 'react'

export default function CoinDetailscomponent({ coin }) {
    return (
        <div>
            <div>
                {coin.id}    ({coin.name})
            </div>
            <div>
                {coin.id}    ({coin.market_cap_rank})
            </div>
        </div>

    )
}
