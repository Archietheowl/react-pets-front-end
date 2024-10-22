import {useState} from "react"
import {create} from "../services/petService"

//!--- Components
import {useNavigate} from '../components/PetForm'
import PetForm from "../components/PetForm"

const PetCreate = ({fetchPets}) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: ''
    })

//!--- Location variables (why the term location. I get nav ones but handle change?)
const navigate = useNavigate()

const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
}

const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        await create(formData)
        fetchPets()
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
//!--- Render
return (
    <>
        <h1>Add a Pet</h1>
        <PetForm 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData} />
    </>
)
}

export default PetCreate