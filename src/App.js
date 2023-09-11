import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Route, Routes } from 'react-router-dom'
import Loginn from './Loginn'
import Home from './Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Loginn}/>
        <Route path='/home' Component={Home}/>
      </Routes>
    </>
  )
}

export default App