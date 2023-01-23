import React from "react";
import Stock from "./Stock";

function PortfolioContainer({outPortfolioHandler, listOfStocks}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        listOfStocks.map((stock) => {
          if(stock.inPortfolio === true) {
            return (
              <Stock 
        portfolioHandler={outPortfolioHandler}
        id={stock.id}
        ticker={stock.ticker}
        name={stock.name}
        type={stock.type}
        price={stock.price}
        />)
          }

        })
      }
    </div>
  );
}

export default PortfolioContainer;
