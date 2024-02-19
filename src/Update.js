import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Update() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const { id } = useParams();
  const navigate = useNavigate();


  //function to get data of the record which need to be edited by using {id} and placing in inputs
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        setValues(response.data)
      })
      .catch((error) => console.log(error, 'error fetching Api / json serve not running'))
  }, [])


  // function update the data in db using PUT
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/users/" + id, values)
      .then((response) => {
        console.log(response)
        navigate('/')
      })

      .catch((error) => { console.log(error, "axios PUT error") })
  }

  // console.log(data)

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User Details </h1>

        <form onSubmit={handleUpdate} >

          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className="form-control" placeholder="enter name"
              value={values.name}
              onChange={(e) => { setValues({ ...values, name: e.target.value }) }} />
          </div>

          <div className='mb-2'>
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' className='form-control' placeholder="Enter Email"
              value={values.email}
              onChange={(e) => { setValues({ ...values, email: e.target.value }) }} />
          </div>

          <div className='mb-3'>
            <label htmlFor="phone">Phone:</label>
            <input type="text" name='phone' className='form-control' placeholder="Enter Phone"
              value={values.phone}
              onChange={(e) => { setValues({ ...values, phone: e.target.value }) }} />
          </div>

          <button className="btn btn-success" type="submit">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update