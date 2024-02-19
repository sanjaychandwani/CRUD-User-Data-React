import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
function Create() {
  const [values,setValues]=useState({
    name: '',
    email: '',
    phone: ''
  })
  console.log(values)

  // console.log(data)

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    axios.post("http://localhost:3000/users", values)
    .then((res)=>{
      console.log(res.data)
      navigate('/')
    })
    .catch((error)=> console.log( "error sending data"))
  }


  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h1>Add a User</h1>
          <form onSubmit={handleSubmit}>

            <div className='mb-2'>
              <label htmlFor="name">Name:</label>
              <input onChange={(e)=>{setValues( {...values, name : e.target.value} )}}   type="text" name='name' className="form-control" placeholder="Enter Name" />
            </div>

            <div className='mb-2'>
              <label htmlFor="email">Email: </label>
                <input onChange={(e)=>{setValues( {...values, email : e.target.value} )}} type="email" name='email' className='form-control' placeholder="Enter Email" />
            </div>

            <div className='mb-3'>
              <label htmlFor="phone">Phone:</label>
              <input onChange={(e)=>{setValues( {...values, phone : e.target.value} )}}   type="text" name='phone' className='form-control' placeholder="Enter Phone" />
            </div>

            <button className="btn btn-success" type="submit">Submit</button>
            <Link to="/" className="btn btn-primary ms-3">Back</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
