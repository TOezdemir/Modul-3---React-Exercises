import AnimalCard from "./AnimalCard"
import animals from "../database/data"

function ShowAnimalCard(){
    return(
        <div className="flex flex-wrap justify-around">{animals.map((animal)=>(
            <AnimalCard 
            key={animal.name} 
            name={animal.name} 
            species={animal.species} 
            habitat={animal.habitat} 
            lifespan={animal.lifespan} 
            diet={animal.diet} 
            funFacts={animal.funFacts} 
            emoji={animal.emoji}
            />
        ))}
        </div>
    )
}

export default ShowAnimalCard