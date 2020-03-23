import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {console.error(error);
      })
  }, []);
  console.log(character)
  return (
    <div>
      {character.map(character => (
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
