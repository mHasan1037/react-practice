import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate()

    const header = { "Access-Control-Allow-Origin": "*"};

    const handleSubmit = (e) =>{
        e.preventDefault()
       axios.post('https://6421bb1034d6cd4ebd7a9664.mockapi.io/data/crud',
        {
            name: name,
            email: email,
            header
        })
        .then(()=>{
            history('/read')
        })
    }


  return (
    <div className='container mt-5'>
        <form className="row g-3">
            <h1>Create</h1>
            <div className="col-12">
                <label className="visually-hidden">Password</label>
                <input type="text" className="form-control" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="col-12">
                <label className="visually-hidden">Password</label>
                <input type="text" className="form-control" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Confirm identity</button>
            </div>
        </form>
    </div>
  )
}

export default Create