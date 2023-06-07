import React from 'react'
import { useState } from 'react'
import { login } from '../utils/api.js'
import Input from './Input.jsx'
import Button from './Button.jsx'

const LogForm = ({ setLoggedIn, loggedIn }) => {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [loginError, setLoginError] = useState(false)

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(formData)
    login(formData, setLoggedIn, setLoginError)
  }

  // const login = async () => {
  //   console.log('trying to login')
  //   try {
  //     const response = await fetch(`https://frontend-take-home-service.fetch.com/auth/login`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData),
  //       credentials: 'include'
  //     })

  //     if (response.ok) {
  //       setLoggedIn(true)
  //       console.log('OK!!!')
  //     } else {
  //       setLoginError(true)
  //       console.log('Error Logging In')
  //     }
  //   } catch (error) {
  //     console.log('Network Error', error)
  //   }
  // }

  return (
    <div className="logform-box">
      <form className="log-form" onSubmit={handleLogin}>
        <Input
          name="name"
          type="text"
          placeholderValue="enter your name"
          handleChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholderValue="enter your email"
          handleChange={handleChange}
        />
        <Button onClickBool={false} buttonType="submit" buttonText="Login" />
      </form>
      {loginError ? (
        <p className="log-error">Login Error!</p>
      ) : (
        <p className="login-msg">Please Login</p>
      )}
    </div>
  )
}

export default LogForm
