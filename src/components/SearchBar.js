import React, { useEffect, useState } from 'react';
import MeiliSearch from 'meilisearch';
import '../css/SearchBar.css';

function SearchBar({ indexName }) {
    const [searchClient, setSearchClient] = useState(null); //Meilisearch client
    const [defaultValue, setDefaultValue] = useState(''); //default value for the search input
    const [searchResults, setSearchResults] = useState([]); //store search results

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setDefaultValue(urlParams.get('s'));

        // Initialize Meilisearch client
        const client = new MeiliSearch({
            host: 'https://your-meilisearch-instance.net',
            apiKey: 'your-public-api-key',
        });
        setSearchClient(client);
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        const searchInput = e.target.SearchBoxText.value;
        if (searchInput !== "" && searchClient) {
            const index = searchClient.index(indexName);
            const results = await index.search(searchInput);
            setSearchResults(results.hits); 
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                id="SearchBoxText"
                type="search"
                placeholder="Sök..."
                defaultValue={defaultValue} />
        </form>
    );

    /* Ett exempel på hur MeiliSearch returnerar resultatet:
    för nyheter retunera alla hits som matchar sökningen
    för utskott sidor änvänd eriks magiska filter
    const t = "Worl".toLowerCase(); 
    const nm = message.split(" ").map(w=>w.toLowerCase().includes(t)?"**"+w+"**":w).join(" "), 
    lägg till att den även hoppar till rätt element
    {
        "hits": [
          {
            "id": 3,
            "name": "Biscotte Restaurant",
            "description": "Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers.",
            "categories": []
          }
        ],
        "offset": 0,
        "limit": 20,
        "nbHits": 1,
        "exhaustiveNbHits": false,
        "processingTimeMs": 1,
        "query": "biscoutte"
    }
    */
}

export default SearchBar;
