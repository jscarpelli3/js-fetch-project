import React from 'react'
import {useState, useEffect} from'react'
import { useNavigate } from 'react-router-dom';
import Input from './Input'

const SearchPage = ({loggedIn}) => {
const navigate = useNavigate()
  
useEffect(() => {
   if(!loggedIn){
     navigate('/')
  }
});
  

  return (
    <div>
      <Input />
    </div>
  )
}

export default SearchPage