import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8ffea;`

const Char = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 1%;
  padding: 1%;
  align-items: center;`

export default function CharacterCard(props) {

  

  return(
    <Card>
      <Char>
        <img src={props.image} alt='character image' />
        <h2>Name: {props.name}</h2>
        <p>Gender: {props.gender}</p>
        <p>Species: {props.species}</p>
        <p>Status: {props.status}</p>
      </Char>
    </Card>
  )
}
