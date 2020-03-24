import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function SearchForm({setFilteredCharacter, character}) {
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    // axios.get("https://rickandmortyapi.com/api/character/")
    // .then (response =>{
    //   const characters = response.data.results.filter(character =>
    //   character.name.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    //   setFilteredCharacter(characters);
    //   });
    setFilteredCharacter(character.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    },[searchTerm]);

    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
    
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      
      {/* {searchResults.map(character => (
        <CharacterCard 
        character={character} 
        image={character.image}
        name={character.name}
        species={character.species}
        status={character.status}
        gender={character.gender}
         />
      ))} */}
      </div>

  )
}