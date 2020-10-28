import React from "react";
import { useHistory } from "react-router-dom";

function SearchResults({ data }) {
  const dataExchange = (data) => {
    if (data.exchange === "NAS") {
      return "NASDAQ";
    } else if (data.exchange === "NYS") {
      return "New York Stock Exchange";
    } else if (data.exchange === "OTC") {
      return "US OTC";
    } else return data.exchange;
  };

  let history = useHistory();

  function handleClick() {
    history.push(`/symbol/${data.symbol}`);
  }

  return (
    <>
      <div className="stock-search-card shadow" key={data.symbol}>
        <div className="stock-search-main">
          <div className="stock-search-item stock-logo">
            <img
              src={`https://storage.googleapis.com/iexcloud-hl37opg/api/logos/${data.symbol}.png`}
              alt={`${data.securityName} Logo`}
            ></img>
          </div>
          <div className="stock-search-item search-name">
            <div className="stock-search-symbol">{data.symbol}</div>
            <div className="stock-search-security">{data.securityName}</div>
          </div>
          <div className="stock-search-item stock-exchange">
            {dataExchange(data)}
          </div>
        </div>

        <div className="more-info button-scheme" onClick={handleClick}>
          <i className="fas fa-angle-right fa-3x"></i>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
