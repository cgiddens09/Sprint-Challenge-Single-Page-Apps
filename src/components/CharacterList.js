import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchForm from './SearchForm';
import styled from 'styled-components';


const Home = styled.button`
width: 30%;
margin-left: 35%;
background-color: #6eccca;
padding: 1%;
border-radius: 10px;
border: 1px solid black;
`


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results);
        setFilteredCharacters(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {console.error(error);
      })
  }, []);
  
  return (
    
    <div>
      <nav>
        <Link to='/'>
          <Home>Home</Home>
        </Link>
        <SearchForm setFilteredCharacters={setFilteredCharacters} characters={characters}/>
        
      </nav>
      {filteredCharacters.map(character => (
          <CharacterCard 
          key={character.name}
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
