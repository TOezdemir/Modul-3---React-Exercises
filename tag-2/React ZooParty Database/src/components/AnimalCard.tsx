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
        <div className="border-2 rounded-lg items-center m-8 text-white">
            <div className="text-9xl text-center">{props.emoji}</div>
            <div className="text-2xl text-center">{props.name}</div>
            <div className="text-l text-center">{props.species}</div>
            <div className="text-l text-center">{props.habitat}</div>
            <div className="text-l text-center">{props.diet}</div>
            <div className="text-l text-center">{props.lifespan}</div>
            <div className="flex flex-col justify-end bg-slate-500 border-1 rounded-lg size-96" >
             <ul className=" self-center list-disc ml-8">{props.funFacts.map((fact)=>(
                <li>{fact}</li>
            ))}</ul>   
            </div>
            
        </div>
    ) 
}

export default AnimalCard