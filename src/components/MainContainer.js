import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  
  const [stocks, setStocks] = useState([]);

  useEffect(() => (
    fetch(`http://localhost:3001/stocks`)
    .then((r) => r.json())
    .then((data) => setStocks(data))
  ),[])
  
  function sortByPrice () {
    console.log(`sort me by price!`)
  }
  
  function sortAlphabetically () {
    
   const sortedStocks = stocks.sort( function ( a, b ) {
      if ( a.name < b.name ) {
        return -1;
      }
      if ( a.name > b.name ) {
        return 1;
      }
      return 0;
    })
    
    console.log(sortedStocks)
    setStocks(sortedStocks)
    console.log(stocks)
  }
  
  function sortBy (value) {
    if ( value === "Alphabetically" ){
      sortAlphabetically()
    }
    if ( value === "Price") {
      sortByPrice()
    }
  }
  
  function inPortfolioHandler(event) {
    
    const newStocks = [...stocks]
    
    fetch(`http://localhost:3001/stocks/${event.target.id}`, {
        method: `PATCH`,
        body: JSON.stringify({
          inPortfolio : true
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
    })

    .then((r) => r.json())
    .then((data) => {
      newStocks[data.id-1] = data
      setStocks(newStocks)
    })
    
    
    console.log(event.target.id)
  }

  function outPortfolioHandler(event) {
    
    const newStocks = [...stocks]
    
    fetch(`http://localhost:3001/stocks/${event.target.id}`, {
        method: `PATCH`,
        body: JSON.stringify({
          inPortfolio : false
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
    })

    .then((r) => r.json())
    .then((data) => {
      newStocks[data.id-1] = data
      setStocks(newStocks)
    })
    
    
    
    console.log(event.target.id)
  }

  return (
    <div id="Main Container">
      <SearchBar 
      sortBy={sortBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer inPortfolioHandler={inPortfolioHandler} listOfStocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer outPortfolioHandler={outPortfolioHandler} listOfStocks={stocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
