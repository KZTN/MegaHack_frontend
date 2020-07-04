import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className="search-container">
        <input type="text" placeholder="Pesquisar" />
        <button>
          <FaSearch />
        </button>
    </div>
  )
}

export default SearchBar 