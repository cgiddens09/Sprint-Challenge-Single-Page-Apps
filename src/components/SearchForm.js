import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
      setSearchTerm(event.target.value);
    };
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then (response =>{
      const characters = response.data.results.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(characters);
      }, [searchTerm])}
  );
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      
      {searchResults.map(character => (
        <CharacterCard 
        character={character} 
        image={character.image}
        name={character.name}
        species={character.species}
        status={character.status}
        gender={character.gender}
         />
        ))}
      </div>

  )
}