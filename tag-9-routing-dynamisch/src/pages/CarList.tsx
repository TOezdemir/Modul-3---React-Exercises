import CarCard from "../components/CarCard"
import { cars } from "../data/data"


export default function CarList(){
    return(
        cars.map((el)=>{
            return <CarCard key={el.id} id={el.id} carMake={el.CarMake}/>
        })
    )
}