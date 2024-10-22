// src/components/PetDetail.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {show } from '../services/petService'

const PetDetail = () => {
    const [pet, setPet] = useState(null)
    // const [isLoading, setIsLoading] = useState(true) ///What was this all about????????
    
    //!--- Location variables
    const { petId } = useParams()
    
    //! On page load render 
            useEffect(()=> { //useEffect Syntax useEffect(() {} []) just remember one of each brackets.
            const fetchPet = async () => {
            try{
                //Call our service "show" function
                const { data } = await show(petId)
                setPet (data)
            }catch (error) {
                console.log(error)
                //Set error state
            }
        }
        fetchPet()
        }, [petId])


    return (
        // return statement if props.selected has a truthy value
        <>
            {pet &&
                <section>
                    <h1>{pet.name}</h1>
                    <h3>Breed: {pet.breed}</h3>
                    <h3>Age: {pet.age} year{pet.age !== 1 ? 's' : ''} </h3>
                    <Link to={`/pets/${pet._id}/edit`} >Edit{pet.name}</Link>
                </section>
                }
        </>
    );
};

export default PetDetail;
