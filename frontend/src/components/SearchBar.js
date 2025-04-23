import React, { useEffect, useState } from "react";
import "../css/SearchBar.css";

function SearchBar({ onSearch }) {
  const [defaultValue, setDefaultValue] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setDefaultValue(urlParams.get("s"));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const searchInput = e.target.SearchBoxText.value;
    if (searchInput !== "") {
      window.location.href = `/?s=${searchInput}`;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        id="SearchBoxText"
        type="search"
        placeholder="Sök..."
        defaultValue={defaultValue}
      />
    </form>
  );
}

export default SearchBar;
