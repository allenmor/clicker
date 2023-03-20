import React from "react";
import { useState, useEffect } from "react";
import CoinAmount from "./CoinAmount";
import CoinImage from "./CoinImage";
import Shop from "./Shop";

function Game() {
  const [coin, setCoin] = useState(0);
  const [coinPerSecond, setCoinPerSecond] = useState(0);
  const [clicker, setClicker] = useState(1);
  const [num, setNum] = useState(0)
  useEffect(()=>{
      setInterval(() => {
          setNum(prev => prev += 1)
        setCoin((prev) => 
            prev += coinPerSecond
        )
     }, 1000);
     // eslint-disable-next-line
  },[])

  useEffect(()=>{
      setCoin(prev => prev + coinPerSecond)
      // eslint-disable-next-line
  },[num])
  return (
    <div className="coin-div">
      <CoinAmount coin={coin} coinPerSecond={coinPerSecond} clicker={clicker} />
      <CoinImage coin={coin} clicker={clicker} setCoin={setCoin} />
      <Shop setCoinPerSecond={setCoinPerSecond} setClicker={setClicker} coin={coin} setCoin={setCoin}/>
    </div>
  );
}

export default Game;
