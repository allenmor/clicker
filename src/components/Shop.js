import React, { useState } from "react";

function Shop({ setCoinPerSecond, setClicker, coin, setCoin }) {
  const [autoClickPrice, setautoClickPrice] = useState(15);
  const [clicksPlusOnePrice, setclicksPlusOnePrice] = useState(20);

  function handleAuto1Click() {
    if (coin > autoClickPrice) {
      setCoinPerSecond((prev) => (prev += 1));
      setCoin((prev) => prev - autoClickPrice);
      setautoClickPrice((prev) => prev + 15);
    }
  }
  function handleClicker1Click() {
    if (coin > clicksPlusOnePrice) {
      setCoin((prev) => prev - clicksPlusOnePrice);
      setClicker((prev) => prev + 1);
      setclicksPlusOnePrice((prev) => prev + 15);
    }
  }
  return (
    <div className="shop-div">
      <div onClick={handleClicker1Click} className="shop-upgrades-div">
        <p>Clicks +1</p>
        <p>Price: {clicksPlusOnePrice}</p>
      </div>
      <div onClick={handleAuto1Click} className="shop-upgrades-div">
        <p>Auto Click 1</p>
        <p>Price: {autoClickPrice}</p>
      </div>
    </div>
  );
}

export default Shop;
