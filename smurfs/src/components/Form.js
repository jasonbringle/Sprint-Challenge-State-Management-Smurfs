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
    if(newSmurf.name && newSmurf.age && newSmurf.height){
        Axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.data.error.message))
        setNewSmurf({
            name: '',
            age:'',
            height:'',
            id:''
        })
    }
}

    return <div className="App">
       <form onSubmit={addNewSmurf}>
            <input type="text" onChange={changeHandler} autoComplete='off' name="name" value={newSmurf.name} placeholder="Smurf Name"/>
            <input type="text" onChange={changeHandler} autoComplete='off' name="age" value={newSmurf.age} placeholder="Smurf Age"/>
            <input type="text" onChange={changeHandler} autoComplete='off' name="height" value={newSmurf.height} placeholder="Smurf height"/>
            <button>Add New Smurf</button>
        </form>
      </div>

}

export default Form;
