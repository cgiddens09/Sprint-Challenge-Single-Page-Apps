import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Search = styled.div`
width: 25%;
margin-left: 42%;
margin-top: 2%;
margin-bottom: 2%;
`

export default function SearchForm({setFilteredCharacters, characters}) {
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
 
    setFilteredCharacters(characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    },[searchTerm, characters, setFilteredCharacters]);

    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
    
  return (
    <Search>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      
      </Search>

  )
}