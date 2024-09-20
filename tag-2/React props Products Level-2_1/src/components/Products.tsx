import Cards from "./Card"
import Bild1 from '../assets/img/Bild1.jpg'
import Bild2 from '../assets/img/Bild2.avif'
import Bild3 from '../assets/img/Bild3.webp'

const products = [
    {
        image: Bild1,
        name: "Coco Oil",
        price: "€30"
    },
    {
        image: Bild2,
        name: "Polaraoid Instacam",
        price: "€60"
    },
    {
        image: Bild3,
        name: "Avocado Oil Lotion",
        price: "€20"
    }
]

function ProductCards(){
    return(
        <div className="flex gap-5 mt-10">
            {products.map(({image, name, price})=>(
                <Cards image={image} name={name} price={price}/>
            ))}
        </div>
    )
}

export default ProductCards