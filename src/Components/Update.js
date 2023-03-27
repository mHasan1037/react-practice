import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, [])

    const header = { "Access-Control-Allow-Origin": "*"};

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.update('https://6421bb1034d6cd4ebd7a9664.mockapi.io/data/crud',
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
    <>
    <form className="row g-3">
            <h1>Update</h1>
            <div className="col-12">
                <label className="visually-hidden">Password</label>
                <input type="text" value={name} className="form-control" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="col-12">
                <label className="visually-hidden">Password</label>
                <input type="text" value={email} className="form-control" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Update</button>
            </div>
    </form>
    </>
  )
}

export default Update