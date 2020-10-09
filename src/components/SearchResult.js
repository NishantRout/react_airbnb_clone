import React from 'react';
import './css/SearchResult.css';

function SearchResult({img,
    location,
    title,
    description,
    star,
    price,
    total,}) {
    return (
        <div className="searchResult">
            <img src={img} alt="room-img" />
        </div>
    )
}

export default SearchResult;
