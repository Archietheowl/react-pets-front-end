import { useState, useEffect } from 'react'
import { index } from './services/petService'

// Components
import PetList from './components/PetList'

const App = () => {
  // ! State
  const [petList, setPetList] = useState([])
  const [error, setError] = useState('')

  // ! On initial render (mount)
  // Make a call to the index route of our API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await index()
        setPetList(data)
      } catch (error) {
        console.log(error)
        setError(error.response.data.error)
      }
    }
    fetchPets()
  }, [])

  return <PetList petList={petList} error={error} />
}

export default App