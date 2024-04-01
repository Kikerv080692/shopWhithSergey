import './Search.scss'
import {useState} from "react";
const Search = ({search, handleChange}) => {

    return(
        <div className="search-wrapper">
            <input
                className="search-input"
                placeholder='search'
                value={search}
                onChange={handleChange}/>
    </div>
    )
}

export  default Search