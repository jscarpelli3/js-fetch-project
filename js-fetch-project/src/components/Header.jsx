import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../utils/api.js'
import logo from './../images/bark.png'
import Button from './Button.jsx'

const Header = ({ setLoggedIn, loggedIn }) => {
  const [logoutError, setLogoutError] = useState(false)

  const handleLogout = async (e) => {
    logout(setLoggedIn, setLogoutError)
  }

  return (
    <div className="header-box">
      <img className="header-logo" src={logo} alt="go fetch logo" />
      <span className='nav-link-box'>
        <Link to='/'>
          <h2 className="nav-link">Login</h2>
        </Link>
        <Link to='/'>
          <h2 lassName="nav-link">Search</h2>
        </Link>
        <Link to='/'>
          <h2 lassName="nav-link">About</h2>
        </Link>
      </span>
      <div className="logout-button-container">
        {loggedIn ? (
          <Button
          onClickBool={true}
          buttonType="button"
          buttonText="LogOut"
          handleLogout={handleLogout}
          />
          ) : (
            <h3>Please Log In</h3>
            )}
      {logoutError ? 
        <p className="log-error">Error Logging Out</p> 
        : 
        null}
       </div>
    </div>
  )
}

export default Header
