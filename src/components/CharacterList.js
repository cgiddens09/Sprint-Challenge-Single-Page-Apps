import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [filteredCharacter, setFilteredCharacter] = useState([]);


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results);
        setFilteredCharacter(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {console.error(error);
      })
  }, []);
  console.log(character)
  return (
    
    <div>
      <nav>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <SearchForm setFilteredCharacter={setFilteredCharacter} character={character}/>
    </nav>
      {filteredCharacter.map(character => (
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
    
  );
}
