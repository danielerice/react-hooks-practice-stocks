import React from "react";

function Stock({ id, ticker, name, type, price, portfolioHandler}) {



  return (
    <div id={id} type={type}>
      <div  id={id} className="card">
        <div onClick={portfolioHandler}  className="card-body" id={id}>
          <h5 id={id} className="card-title">{name}</h5>
          <p id={id} className="card-text">`{ticker}:{price}`</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
