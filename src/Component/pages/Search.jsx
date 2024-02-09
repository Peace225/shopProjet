import React from 'react'

function Search({placeholder, data}) {
  return (
    <div className="searche">
    <div className="searchInputs">
        <input type="texte" placeholder={placeholder}/>
        <div className="searchIcon"><div>
    </div>
    <div className="dataResult"></div>
      
    </div>
  )
}

export default Search
