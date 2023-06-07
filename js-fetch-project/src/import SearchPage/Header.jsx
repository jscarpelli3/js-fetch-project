import React from 'react'
import { useState } from 'react'
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
      {logoutError ? <p className="log-error">Error Logging Out</p> : null}
    </div>
  )
}

export default Header
