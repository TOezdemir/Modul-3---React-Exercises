import { Link } from "react-router-dom"

    interface CarCardProps{
    carMake: string,
    id: number
    }

export default function CarCard({carMake, id}: CarCardProps){
    return(
        <div className="grid">
            <p>{carMake}</p>
            <Link to={`/${id}`}>Read more!</Link>
        </div>
    )
}