import React from "react";
import Stock from "./Stock";

function StockContainer({listOfStocks, inPortfolioHandler}) {
  
  console.log(`in stock container`,listOfStocks)

  return (
    <div>
      <h2>Stocks</h2>
      {listOfStocks.map((stock) => {
        if(stock.inPortfolio === false) {
        return (<Stock 
        portfolioHandler={inPortfolioHandler}
        id={stock.id}
        ticker={stock.ticker}
        name={stock.name}
        type={stock.type}
        price={stock.price}
        />)}
      })}
    </div>
  );
}

export default StockContainer;
