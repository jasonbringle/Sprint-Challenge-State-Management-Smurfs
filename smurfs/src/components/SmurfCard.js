import React, { useContext } from "react";
import styled from 'styled-components'
import SmurfDeleteContext from '../contexts/SmurfDeleteContext'

const SmurfCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18rem;
    height:18rem;
    border: 10px solid blueviolet;
    border-radius: 500px;
    background-color: cyan;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0px 80px 80px 2px black;
`

const SmurfCard = (props) => {
const { deleteSmurf } = useContext(SmurfDeleteContext)
    return (
        <SmurfCardDiv>
            <h1>{props.smurf.name} Smurf</h1>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <button>Edit Smurf</button>
            <button id={props.smurf.id} onClick={deleteSmurf}>Delete Smurf</button>
        </SmurfCardDiv>
    );
  
}

export default SmurfCard;
