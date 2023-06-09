import React from 'react'
import {useState, useEffect} from'react'
import { useNavigate } from 'react-router-dom';
import { search } from '../utils/api.ts'
import Input from './Input'
import Button from './Button.jsx';

const SearchPage = ({loggedIn}) => {
  const [searchParams, setSearchParams] = useState({})
  const [fetchedData, setFetchedData] = useState({})
  const [dogs, setDogs] = useState({})
  const [fetched, setFetched] = useState(false)
  const navigate = useNavigate()

  //https://example.com/search?query=apple&category=fruits &color[]=red &color[]=green &color[]=yellow

//   const searchArray = ['item1', 'item2', 'item3'];
// const encodedSearchArray = encodeURIComponent(searchArray.join(','));




const handleSearch = async (e) => {
  e.preventDefault()
  try {
  const breeds = encodeURIComponent(searchParams.breeds.join(','))
  const zipCodes = encodeURIComponent(searchParams.zopCodes.join(','))
  const data = await search(breeds, zipCodes, searchParams.ageMin, searchParams.ageMax,searchParams.sort,searchParams.ortFormat)
  setFetchedData(data)
  console.log(fetchedData)
  } catch (error) {
    console.log('Search Error', error)
  }
}


  
useEffect(() => {
   if(!loggedIn){
     navigate('/')
  }
});
  

  return (
    <div>
      <div classname="search-page-container">
        <h1>This is the search page</h1>
        <Input />
        <Button buttonType='submit' buttonText='Search'/>
      </div>
      <div className="cards-container">
      {fetched ? 
      // dogs.map((dog)=>{
      //   return(
      //     <div className="card-box" key={dog.id}>
      //     <Card />
      //   )
      // })
      <div>
      'HELLO, THIS IS A LIST'
          </div>
      : 
      <div>
      'This did not work' 
      </div>}
    </div>
  </div>
  )
}

export default SearchPage