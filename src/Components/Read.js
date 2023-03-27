import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Read = () => {
    const [data, setData] = useState([])

    function getData(){
        axios.get('https://6421bb1034d6cd4ebd7a9664.mockapi.io/data/crud')
        .then((res)=> {
            setData(res.data)
        })
    }

    function handleDelete(id){
       axios.delete(`https://6421bb1034d6cd4ebd7a9664.mockapi.io/data/crud/${id}`)
       .then(()=>{
            getData()
       })
    }

    const setToLocalStorage = (id, name, email) =>{
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    useEffect(()=>{
        getData()
    }, [])

  return (
    <>
       <h2>Read Operation</h2>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            {
                data.map((eachData)=>{
                    const { id, name, email } = eachData
                    return (
                    <tbody key={id}>
                        <tr>
                            <th scope="row">{id}</th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>
                                <Link to='/update'>
                                    <button className='btn btn-success'
                                       onClick={()=> setToLocalStorage(id, name, email)}
                                    >
                                        Edit
                                    </button>
                                </Link>
                            </td>
                            <td><button className='btn btn-danger' onClick={()=> handleDelete(id)}>Delete</button></td>
                        </tr>
                    </tbody>
                    )
                })
            }
            </table>
    </>
  )
}

export default Read