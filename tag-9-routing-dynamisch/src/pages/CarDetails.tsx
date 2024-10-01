import { cars } from "../data/data";
import { useParams } from "react-router-dom";

const getCar = (id: string ) =>{
    return cars.find((car)=> car.id === parseInt(id))
}

export default function CarDetails(){
    const { id } = useParams()

    if (!id){
        return "404 no car... :("
    }

    const car = getCar(id!)

    if (!car){
        return "404 still no car... :(("
    }

    return(
        <div className="details">
            {car.CarMake} {" "}
            <br />
            {car.CarModel}{" "}
            <br />
            {car.CarYear}{" "}
        </div>
    )
}
