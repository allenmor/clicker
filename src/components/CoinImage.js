import React from 'react'
import coinImage from '../images/penny.png'
function CoinImage({setCoin, clicker}) {
  function handleCoinClick() {
    setCoin(prev => prev += clicker)
  }
  return (
    <div onClick={handleCoinClick} className='coin-img-div'>
        <img src={coinImage} alt='coin' />
    </div>
  )
}

export default CoinImage