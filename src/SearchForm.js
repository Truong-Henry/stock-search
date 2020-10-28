import React, { useState, useRef } from "react";
import { iex } from "./config/iex";
import activeLogic from "./activeLogic";

function SearchForm({ setSearchData, setResultsMessage, history }) {
  const [query, setQuery] = useState("");
  const refForm = useRef(null);
  const refInput = useRef(null);

  const searchStock = async (e) => {
    history.push(`/`);
    e.preventDefault();
    const url = `${iex.base_url}/search/${query}${iex.api_token}`;
    const hasResults = () => setResultsMessage(`Results for "${query}"`);
    const noResults = () =>
      setResultsMessage(`No results for "${query}". Please try again.`);

    try {
      const res = await fetch(url);
      const data = await res.json();
      const filteredData = data.filter((data) => data.region === "US"); // Only stocks availible in US
      setSearchData(filteredData);
      filteredData.length === 0 ? noResults() : hasResults();
    } catch (error) {
      setSearchData([]);
      noResults();
      console.error("error", error);
    }
  };

  activeLogic(refForm, refInput);
  return (
    <form ref={refForm} className="search-form shadow">
      <label htmlFor="query">Stock Name</label>
      <input
        ref={refInput}
        className="query"
        type="text"
        name="query"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g Apple or AAPL"
        autoComplete="off"
      ></input>
      <button
        className="search-button button-scheme"
        type="submit"
        onClick={searchStock}
      >
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SearchForm;
