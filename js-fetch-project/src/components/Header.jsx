import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../utils/api.ts'
import logo from './../images/bark.png'
import Button from './Button.jsx'
import { useNavigate } from 'react-router-dom'

const Header = ({ setLoggedIn, loggedIn }) => {
  const [logoutError, setLogoutError] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logout()
      setLoggedIn(false)
      navigate('/')
    } catch {
      setLogoutError(true)
    }
  }

  return (
    <div className="header-box">
      <img className="header-logo" src={logo} alt="go fetch logo" />
      <div className='nav-link-box'>
        <Link className='enabled' to='/'>
          <h2 className="nav-link">Login</h2>
        </Link>
        <Link className={loggedIn ? 'enabled' : 'disabled'} to='/search'>
          <h2 className="nav-link">Search</h2>
        </Link>
        <Link className={loggedIn ? 'enabled' : 'disabled'} to='/about'>
          <h2 className="nav-link">About</h2>
        </Link>
      </div>
      <div className="logout-button-container">
        {loggedIn ? (
          <Button
          onClickBool={true}
          buttonType="button"
          buttonText="LogOut"
          handleLogout={handleLogout}
          />
          ) : null}
      {logoutError ? 
        <p className="log-error">Error Logging Out</p> 
        : 
        null}
       </div>
    </div>
  )
}

export default Header
