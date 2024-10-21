const PetList = ({ petList, error }) => {

    const pets = petList.map(pet => {
        return <li key={pet._id}>{pet.name}</li>
    })

    return (
        <section>
            <h1>Pet List</h1>
            {error
                ? <p className="error">{error}</p>
                : <ul>{pets}</ul>
            }
        </section>
    )
}

export default PetList