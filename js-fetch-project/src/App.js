import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import LogForm from './components/LogForm'
import Card from './components/Card'
import Input from './components/Input'
import './App.css'
import { login, logout } from './utils/api'

function App() {
  const [user, setUser] = useState([])
  const [logged, setLogged] = useState(false)
  const [fetchedData, setFetchedData] = useState(false)



  return (
    <div className="App">
      <header className="header-container">
        <Header loggedIn/>
     </header>
     <hr/>
      {logged ? 
        <div className="card-container">
          <Input />
        </div> 
        : 
        <div>
          <LogForm loggedIn={logged}/>
        </div>}
    </div>
  )
}

export default App
