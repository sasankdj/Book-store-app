import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBook.jsx'
import ShowBook from './pages/ShowBook.jsx'
import DeletBook from './pages/DeletBook.jsx'
import EditBook from './pages/EditBook.jsx'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/create' element={<CreateBook/>}/>
    <Route path='/books/delete/:id' element={<DeletBook/>}/>
    <Route path='/books/edit/:id' element={<EditBook/>}/>
    <Route path='/books/details/:id' element={<ShowBook/>}/>

   </Routes>
  )
}

export default App