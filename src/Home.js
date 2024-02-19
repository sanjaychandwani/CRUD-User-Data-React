import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

  console.log(data)



  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((response) => {
        setData(response.data)
      })

      .catch((error) => console.log(error, 'error fetching Api / json serve not running'))
  }, [])

  // fetch("https://dummyjson.com/products")
  // .then(resposne => resposne.json())
  // .then(data => console.log(data))

  //  async function getData(){
  //   const response = await axios.get("http://localhost:3000/users")
  //   console.log(response.data)

  function handleDelete(id, name) {
    const isConfirmed = window.confirm(`Are you sure you want to delete the Record of Mr/Ms ${name}?`);
  
    if (isConfirmed) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error, 'error deleting user');
        });
    }
  }
  



  return (
    <>

      <div className='d-flex flex-column justify-content-center align-items-center bg-light '>
        
        <h1>List of users</h1>

        <div className='w-75 rounded bg-white border shadow p-4'>

          <div className='d-flex justify-content-end'>
            <Link to="/Create" className='btn btn-success'>Add +</Link>
          </div>

          <table className='table table-striped'>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map((element, index) => {

                  return (
                    <tr key={index}>
                      <td>{element.id}</td>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.phone}</td>
                      <td>
                        <Link to={`/Read/${element.id}`}><button className='btn btn-sm btn-primary m-1'>Read</button></Link>
                        <Link to={`/Update/${element.id}`}><button className='btn btn-sm btn-primary m-1'>Edit</button> </Link>
                        <button onClick={()=>{handleDelete(element.id, element.name)}} className='btn btn-sm btn-danger m-1'>Delete</button>
                      </td>
                    </tr>
                  )

                })
              }

            </tbody>

          </table>
        </div>
      </div>
    </>
  )
}


export default Home;