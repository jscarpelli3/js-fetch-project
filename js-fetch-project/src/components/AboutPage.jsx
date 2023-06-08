import React from 'react'
import {useState, useEffect} from'react'
import { useNavigate } from 'react-router-dom';

const AboutPage = ({loggedIn}) => {
  const navigate=useNavigate()
  useEffect(() => {
    if(!loggedIn){
      navigate('/')
    }
  });


  return (
    <div>AboutPage</div>
  )
}

export default AboutPage