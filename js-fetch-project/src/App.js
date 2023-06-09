import React from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Card from './components/Card'
import Input from './components/Input'
import SearchPage from './components/SearchPage'
import AboutPage from './components/AboutPage'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
 

  return (
    <div className="App">
      <header className="header-container">
        <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      </header>
      <main className="main-box">
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
                setUser={setUser}
                user={user}
                />
              }
              />
          <Route path="/search" element={<SearchPage loggedIn={loggedIn} />} />
          <Route path="/about" element={<AboutPage loggedIn={loggedIn} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
