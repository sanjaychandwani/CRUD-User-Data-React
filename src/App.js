import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Delete from './Delete'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="*" element={<h1>Route does not exist</h1>}/>

      <Route path='/' element={<Home />}></Route>
      <Route path='/Create' element={<Create />}></Route>
      <Route path='/Update/:id' element={<Update />}></Route>
      <Route path="/Read/:id" element={<Read />} >
     
    </Route>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App