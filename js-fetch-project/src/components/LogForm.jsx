import React from 'react'
import Input from './Input'
import Button from './Button'


const LogForm = ({ loggedIn }) => {

  const handleLogin = (e) => {
    console.log('i submitted')
  }

  return (
    <div className="logform-box">
      <form className="log-form" onSubmit={handleLogin}>
        <Input type="text" defaultValue="name" />
        <Input type="email" defaultValue="email" />
        <Button onClickBool={false} buttonType='submit' buttonText="LogOut" />
      </form>
    </div>
  )
}

export default LogForm
