import React, { useContext } from "react";
import styled from 'styled-components'
import SmurfDeleteContext from '../contexts/SmurfDeleteContext'

const SmurfCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    border: 2px solid grey;
    border-radius: 50px;
    background-color: cyan;
    padding: 1rem;
    margin: 1rem;
`

const SmurfCard = (props) => {
const { deleteSmurf } = useContext(SmurfDeleteContext)
    return (
        <SmurfCardDiv>
            <h1>Name: {props.smurf.name}</h1>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <button>Edit Smurf</button>
            <button id={props.smurf.id} onClick={deleteSmurf}>Delete Smurf</button>
        </SmurfCardDiv>
    );
  
}

export default SmurfCard;
