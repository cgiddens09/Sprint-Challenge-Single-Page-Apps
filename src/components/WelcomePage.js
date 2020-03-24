import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function WelcomePage() {
  const Welcome = styled.div`
  display: flex;
  justify-content: center;
  background-color:#e8ffea;
  `
  const Image = styled.div`
  margin-left: 17%;`

  const Button= styled.button`
  display:flex;
  width: 50%;
  background-color:#6eccca;
  color:black;
  padding: 3%;
  margin-left: 19%;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid black;
  cursor:pointer;
  `

  return (
    <Welcome>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Image>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </Image>
        <Link to='/Characters'>
          <Button>Check Out the Characters!</Button>
        </Link>
      </header>
     
    </Welcome>
  );
}
