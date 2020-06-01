import React, { useState} from 'react'
import Axios from 'axios'

const Form = () => {
const [ newSmurf, setNewSmurf ] = useState({
    name: '',
    age: '',
    height: '',
    id: '',
})

const changeHandler = e => {
   setNewSmurf({
    ...newSmurf,
    [e.target.name]: e.target.value
    })
}

const addNewSmurf = e => {
    e.preventDefault();
    Axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.data.error.message))
}

    return <div className="App">
       <form onSubmit={addNewSmurf}>
            <input type="text" onChange={changeHandler} name="name" value={newSmurf.name} placeholder="Smurf Name"/>
            <input type="text" onChange={changeHandler} name="age" value={newSmurf.age} placeholder="Smurf Age"/>
            <input type="text" onChange={changeHandler} name="height" value={newSmurf.height} placeholder="Smurf height"/>
            <button>Add New Smurf</button>
        </form>
      </div>

}

export default Form;
