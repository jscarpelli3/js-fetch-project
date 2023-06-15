import React from 'react'
import {useState, useEffect} from'react'
import { useNavigate } from 'react-router-dom';
import { search, retrieveDogs } from '../utils/api.ts'
import Input from './Input'
import Button from './Button.jsx';
import Card from './Card.jsx';

const SearchPage = ({loggedIn}) => {
  const [searchParams, setSearchParams] = useState({})
  const [fetchedData, setFetchedData] = useState({})
  const [dogs, setDogs] = useState([])
  const [dogIds, setDogIds] = useState({})
  const [fetched, setFetched] = useState(false)
  const navigate = useNavigate()


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

const getAllDogs = async () => {
  try {
    return await search()
  } catch {
    console.log('could not get dogs')
  }
}

const retrieveCurrentDogs = async (dogIds) => {
  console.log('retrieving dogs...')
  try {
    const currentDogs = await retrieveDogs(dogIds)
    setDogs(currentDogs)
  } catch {
    console.log('could not get current dogs!')
  }
}

const handleGetDogs = async () => {
  const dataFetched = await getAllDogs()
  setDogIds(dataFetched)
  console.log(dataFetched.resultIds)
  const dogsFetched = await retrieveCurrentDogs(dataFetched.resultIds)
  console.log(dogs)
}


  

  return (
    <div>
      <div classname="search-page-container">
        <h1>This is the search page</h1>
        <Input />
        <Button buttonType='submit' buttonText='Search'/>
      </div>
      <button onClick={handleGetDogs}>See All Available Dogs</button>
      <div className="cards-container">
      {dogs.length > 0 ? 
      dogs.map((dog)=> {
        return(
          <Card 
            img={dog.img}
            name={dog.name}
            age={dog.age}
            zip_code={dog.zip_code}
            breed={dog.breed} />
        )})    
      : 
      null
      }
    </div>
  </div>
  )
}

export default SearchPage