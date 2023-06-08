import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LogForm from './LogForm'
import SearchForm from './SearchForm'

const LandingPage = ({setLoggedIn, loggedIn, setUser, user}) => {

  return (
    <div className="landing-box">
      {loggedIn 
        ? 
        <div>
          <h3 className="welcome-note">Welcome {user}, your new furry family member is waiting for you!</h3>
          <SearchForm />
        </div>
      : 
      <LogForm setLoggedIn={setLoggedIn} loggedIn={loggedIn} setUser={setUser} />}
    </div>
  )
}

export default LandingPage