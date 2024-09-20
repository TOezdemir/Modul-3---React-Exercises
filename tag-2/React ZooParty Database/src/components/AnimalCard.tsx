interface AnimalDataProps{
    name: string;
    species: string;
    habitat: string;
    lifespan: number;
    diet: string;
    funFacts: string[];
    emoji: string;
};


function AnimalCard(props: AnimalDataProps){
    return(
        <div>
            <div>{props.emoji}</div>
            <div>{props.name}</div>
            <div>{props.species}</div>
            <div>{props.habitat}</div>
            <div>{props.diet}</div>
            <div>{props.lifespan}</div>
            <ul>{props.funFacts.map((fact)=>(
                <li>{fact}</li>
            ))}</ul>
        </div>
    ) 
}

export default AnimalCard