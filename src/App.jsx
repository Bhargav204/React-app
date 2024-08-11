import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import Login from './Login.jsx'
import Scan from './Scan.jsx'
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/scan' element={<Scan/>} />
   </Routes>
   </>
  )
}

export default App