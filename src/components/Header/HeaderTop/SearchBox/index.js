import React from 'react'
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div className='searchBox'>
      <button>
        <FiSearch className='searchIcon'/>
      </button>
    </div>
  )
}

export default SearchBox