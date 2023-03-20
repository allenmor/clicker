import React from 'react'

function CoinAmount({coin, coinPerSecond, clicker}) {
  return (
    <div className='cookies-amount-div'>
      <div>

        <h1>{coin} Coins</h1>
        <h3>{coinPerSecond} per second</h3>
      </div>
      <h3>Coins Per Click: {clicker}</h3>
    </div>
  )
}

export default CoinAmount