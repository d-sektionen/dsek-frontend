import React, {useState} from 'react'
// import '../css/Nav.css';
import '../css/SearchBar.css';

function SearchBar () {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return <div>
        <input
        id="SearchBoxText"
        type="search"
        placeholder="Sök..."
        onChange={handleChange}
        value={searchInput} />
    </div>
} 

export default SearchBar;