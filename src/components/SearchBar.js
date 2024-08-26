import React from 'react'
import "./SearchBar.css" ;
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearchChange }) => {

  const handleChange = (event) => {
    onSearchChange(event.target.value); // Call the parent's handler function
  };
  return (
    <div className='mainContainer'>
         <div className="search-container">
        <form action="#" method="get">
            <input type="text" className="search-input" placeholder="Search..." onChange={handleChange}/>
            <button type="submit" className="search-button"><SearchIcon/></button>
        </form>
    </div>

    </div>
  )
}

export default SearchBar
