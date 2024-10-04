import { Link } from "react-router-dom"

interface allBeerData{
    
}



function AllBeers(){
    return(
    <div>
        <h1>Hier kommen alle Biere!</h1>
        <Link to={"/"}>Back Home!</Link>
    </div>
        
    )
}

export default AllBeers