import React from 'react'
import "./SearchBar.css" ;
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className='mainContainer'>
         <div className="search-container">
        <form action="#" method="get">
            <input type="text" className="search-input" placeholder="Search..."/>
            <button type="submit" className="search-button"><SearchIcon/></button>
        </form>
    </div>

    </div>
  )
}

export default SearchBar
