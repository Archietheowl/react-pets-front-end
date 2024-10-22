import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {show, update} from '../services/petService'

//!--- Components
import PetForm from "../components/PetForm"

const PetUpdate = ({fetchPets}) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: ''
    })

    const navigate = useNavigate()
    const {petId} = useParams()
    
    //!--- The use effect to get on initial page render
    useEffect(() => {
        const fetchPet = async() => {
            try{
                const {data} = await show(petId)
                setFormData(data)
            } catch (error){
                console.log(error)
            }
        }
        fetchPet()
    }, [petId])

    //!---Event Handlers
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await update(petId, formData)
            fetchPets()
            navigate(`/pets/${petId}`)
        } catch (error){
            console.log(error)
        }
    }

    //!---Render

    return (
        <>
            <h1>Edit Pet</h1>
            <PetForm
            handleChange = {handleChange}
            handleSubmit={handleSubmit}
            formData={formData} />
        </>
    )

}

export default PetUpdate