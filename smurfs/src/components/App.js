import React, { useState, useEffect, } from "react";
import Header from './Header';
import Form from './Form';
import Smurfs from './Smurfs'
import SmurfContext from '../contexts/SmurfContext'
import axios from 'axios'
import "./App.css";



const App = () => {
  const [ smurfList, setSmurfList] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => setSmurfList(res.data))
      .catch(err => err)
  })
  
    return (
    <div className="App">
        <Header />
        <SmurfContext.Provider value={{smurfList}}>
        <Form />
        <Smurfs />
        </SmurfContext.Provider>
      </div>
    );
  
}

export default App;
