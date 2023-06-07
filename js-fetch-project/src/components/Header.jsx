import React from 'react'
import logo from './../images/bark.png'
import Button from './Button'


const Header = ({ loggedIn }) => {
  const handleLogout = (e) => {
    console.log('LogOut clicked')
  }

  return (
    <div className="header-box">
      <img className="header-logo" src={logo} alt="go fetch logo" />
      {loggedIn ? (
        <Button onClickBool={true} buttonType='button' buttonText="LogOut" handleLogout={handleLogout} />
      ) : (
        <h3>Please Log In</h3>
      )}
    </div>
  )
}

export default Header
