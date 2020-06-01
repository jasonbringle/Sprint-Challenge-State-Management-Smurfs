import React, { useState, useEffect, } from "react";
import Header from './Header';
import Form from './Form';
import Smurfs from './Smurfs'
import SmurfContext from '../contexts/SmurfContext'
import axios from 'axios'
import "./App.css";
import SmurfDeleteContext from "../contexts/SmurfDeleteContext";
import styled from 'styled-components'
import img from '../img/SmurfShroom.jpg'

const AppDiv = styled.div`
    background-image: url(${img});
    background-size: cover;
    height: 100vh;
`

const App = () => {
  const [ smurfList, setSmurfList] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => setSmurfList(res.data))
      .catch(err => console.log(err))
  })
  
  const deleteSmurf = e => {
    axios
      .delete(`http://localhost:3333/smurfs/${e.target.id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log('error stupid!', err))
  }
  
    return (
    <AppDiv>
        <Header />
        <SmurfContext.Provider value={{smurfList}}>
          <Form />
        <SmurfDeleteContext.Provider value={{deleteSmurf}}>
          <Smurfs />
        </SmurfDeleteContext.Provider>
        </SmurfContext.Provider>
      </AppDiv>
    );
  
}

export default App;
