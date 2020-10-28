import React, { useEffect, useState } from "react";
import { iex } from "./config/iex";

function StockNews({ params }) {
  const [stockData, setStockData] = useState([]);

  const newsUrl = `${iex.base_url}/stock/${params.stockId}/news/last/10${iex.api_token}`;
  const epochConverter = (date) => {
    let convertedDate = new Date(parseInt(date));
    return convertedDate.toGMTString();
  };

  const dataFetcher = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setStockData(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    dataFetcher(newsUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredData = stockData.filter((data) => data.lang === "en"); // Only stocks availible in US

  return (
    <div className="stock-news">
      {filteredData.map((data, index) => (
        <div className="news-content" key={index}>
          <h3>
            <a href={data.url}>{data.headline}</a>
          </h3>
          <h4 className="news-subtext">
            {data.source} &bull; <small>{epochConverter(data.datetime)}</small>
          </h4>
          <p>{data.summary}</p>
          {filteredData.length !== index + 1 && <hr />}
        </div>
      ))}
    </div>
  );
}

export default StockNews;
