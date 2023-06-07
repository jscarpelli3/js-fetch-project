import React from 'react'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import LogForm from './components/LogForm'
import Card from './components/Card'
import Input from './components/Input'
import './App.css'


function App() {
  const [user, setUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [fetchedData, setFetchedData] = useState(false)



  return (
    <div className="App">
      <header className="header-container">
        <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
     </header>
     <hr/>
      {loggedIn ? 
        <div className="card-container">
          YOU ARE LOGGED IN
          <Input />
        </div> 
        : 
        <div>
          <LogForm setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
        </div>}
    </div>
  )
}

export default App
