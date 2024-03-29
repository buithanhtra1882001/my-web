import React from 'react'
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div className='searchBox'>
      <input type="text" placeholder="Nhập từ khoá"/>
      <button>
        <FiSearch className='searchIcon'/>
      </button>
    </div>
  )
}

export default SearchBox