import React, { useState, useEffect } from "react";
import { iex } from "./config/iex";
import { Line } from "react-chartjs-2";

function StockSummary({ params }) {
  const [data, setData] = useState([]);
  const historicalUrl = `${iex.base_url}/stock/${params.stockId}/chart/1y${iex.api_token}`;

  const dataFetcher = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    dataFetcher(historicalUrl, "historical");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let dateLabel = data.map((data) => data.date);
  let volumeData = data.map((data) => data.volume);
  let closeData = data.map((data) => data.close);
  return (
    <>
      <Line
        data={{
          datasets: [
            {
              label: "Volume",
              data: volumeData,
              borderColor: "green",
            },
          ],
          labels: dateLabel,
        }}
      />
      <Line
        data={{
          datasets: [
            {
              label: "Price",
              data: closeData,
              borderColor: "blue",
            },
          ],
          labels: dateLabel,
        }}
      />
    </>
  );
}

export default StockSummary;
