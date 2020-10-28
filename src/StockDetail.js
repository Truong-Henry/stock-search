import React from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";
import StockNews from "./StockNews";
import StockSummary from "./StockSummary";

function StockDetail(props) {
  const params = useParams(); // Checking symbol of current page

  return (
    <div className="stock-details shadow">
      <h2 className="stock-details-symbol">{`${params.stockId.toUpperCase()}`}</h2>
      <nav>
        <ul>
          <li>
            <Link to={`/symbol/${params.stockId}`}>Summary</Link>
          </li>
          <li>
            <Link to={`/symbol/${params.stockId}/news`}>News</Link>
          </li>
        </ul>
      </nav>
      <div className="stock-content">
        <Switch>
          <Route exact path={`/symbol/${params.stockId}/`}>
            <StockSummary params={params} />
          </Route>
          <Route path={`/symbol/${params.stockId}/news`}>
            <StockNews params={params} />
          </Route>
        </Switch>
      </div>
      <div className="stock-graph"></div>
    </div>
  );
}

export default StockDetail;
