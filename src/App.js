import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect";
import SearchResults from "./SearchResults";
import SearchForm from "./SearchForm";
import StockDetail from "./StockDetail";
import shuffledData from "./typeWriterData";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [resultsMessage, setResultsMessage] = useState("");
  const history = useHistory();

  return (
    <div className="container">
      <header>
        <h1 className="title">
          Search for
          <Typewriter
            options={{
              cursor: "",
              delay: 200,
              wrapperClassName: "type-writer",
              strings: shuffledData,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <SearchForm
          setSearchData={setSearchData}
          setResultsMessage={setResultsMessage}
          history={history}
        />
      </header>
      <Switch>
        <Route exact path="/">
          <div className="results-message">{resultsMessage}</div>
          <div className="search-results">
            {searchData.map((data) => (
              <SearchResults key={data.symbol} data={data} />
            ))}
          </div>
        </Route>
        <Route path="/symbol/:stockId">
          <StockDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
