import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import { index } from './services/petService'

// Components
import PetList from './pages/PetList'
import PetDetail from './pages/PetDetail'


const App = () => {
  // ! State
  const [petList, setPetList] = useState([])
  const [selected, setSelected] = useState(null)
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

  const updateSelected = (pet) => {
    setSelected(pet)
  }
    return(

        <Routes>
          <Route path='/' element={ <PetList petList={petList} error={error} updateSelected={updateSelected}/>} />
          <Route path='pets/:petId' element={<PetDetail selected={selected} /> } />
        </Routes>
    ) 
}

export default App