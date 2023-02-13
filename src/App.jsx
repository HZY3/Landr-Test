import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom'
import { NavBar } from './Components/NavBar/NavBar'
import { Home } from './Components/HomePage/Home'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar className='' />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        {/* <Route path='/login' element={<Login />} />
        <Route path='/loginselector' element={<LoginSelector />} />
        <Route path='/loginselector' element={<LoginSelector />} />
            <Route path='/LandInspector' element= { <LandInspector /> } />
            <Route path='/UserLogin' element= { <UserLogin /> } />
            <Route path='/<MetaMaskAuth' element={<MetaMaskAuth /> }/> 
        <Route path='/LandRegistration' element={<LandRegistration />} /> */}
      </Routes>
    </>
  )
}

export default App
