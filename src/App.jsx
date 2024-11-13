import { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import Card from './components/Card.jsx'
import ResidentsList from './components/ResidentsList.jsx'
import Search from './components/Search.jsx'
import HeroVideo from './components/HeroVideo.jsx'
import './styles/App.css'

function App() {
 
  const [location, setLocation] = useFetch()
  const [locationId, setLocationId] = useState(1)

  useEffect(()=> {
    setLocation(`https://rickandmortyapi.com/api/location/${locationId}`)
  }, [locationId])


  return (
    <>
      <div className='hero' />
      <div className='container'>
        <HeroVideo />
        <Search setLocationId={setLocationId} />
        <Card location = {location} />
        <br></br>
        <ResidentsList residents={location?.residents} />
      </div>

    </>
  )
}

export default App
