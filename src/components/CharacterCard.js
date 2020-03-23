import React from "react";

export default function CharacterCard(props) {
  return(
    <div>
      <img src={props.image} alt='character image' />
      <h2>Name: {props.name}</h2>
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>

    </div>
  )
}
