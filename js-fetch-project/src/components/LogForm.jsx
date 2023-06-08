import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../utils/api.ts'
import Input from './Input.jsx'
import Button from './Button.jsx'

const LogForm = ({ setLoggedIn, setUser, loggedIn }) => {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [loginError, setLoginError] = useState(false)
  const navigate = useNavigate()

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(formData)
      setUser(formData.name)
      setLoggedIn(true)
      navigate('/search')
    } catch (error) {
      setLoginError(true)
    }
  }

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
        <Button disabled={formData.name && formData.email ? false : true} onClickBool={false} buttonType="submit" buttonText="Login" />
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
